import express from "express";
import cors from "cors";
import { renderToString } from "react-dom/server";
import React from "react";
import serialize from "serialize-javascript";
import { matchPath, StaticRouter } from "react-router-dom";
import compression from "compression";
import bodyParser from "body-parser";
import helmet from "helmet";

import App from "../shared/App";
import config from "../etc/config";
import routes from "../shared/routes";

const app = express();
app.use(helmet());
app.use(
  cors({ origin: config.API_PREFIX, methods: "GET,HEAD,PUT,PATCH,POST,DELETE" })
);
app.use(compression());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.use(express.static("public"));

app.post("/api/addsubscriber", (req, res) => {
  return res.json("ok");
});

app.get("*", (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  const title = activeRoute.title
    ? activeRoute.title
    : "Names. Люди, которые вдохновляют.";

  promise
    .then(data => {
      const context = { data };
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );

      res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${title}</title>
        <link rel="shortcut icon" href="/Static/favicon.ico" type="image/x-icon">
        <script src="/bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
      </head>
      <body>
        <div id="app">${markup}</div>
      </body>
      </html>
      `);
    })
    .catch(next);
});

app.listen(config.PORT, () => {
  console.log(`Server is listening on port: ${config.PORT}`);
});
