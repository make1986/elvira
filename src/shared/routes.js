import Home from "./Pages/Home";
import Solovyova from "./Pages/Solovyova";

function getParams(path, noparams) {
  let params = path.split(noparams)[1];
  if (!params || params.lenght === 0) {
    return [];
  } else {
    return params.split("/");
  }
}

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    title: "Names. Люди, которые вдохновляют."
  },
  {
    path: "/solotatiana",
    exact: false,
    component: Solovyova,
    title: "Names. Татьяна Соловьева."
  }
];

export default routes;
