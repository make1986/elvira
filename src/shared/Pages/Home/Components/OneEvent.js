import React from "react";
import { Link } from "react-router-dom";

import { IMAGES_PREFIX } from "../../../../etc/config";

export default function OneEvent({ data }) {
  return (
    <Link to={data.link} className="speaker">
      <div
        className="speaker__img"
        style={{
          background: `url(${IMAGES_PREFIX}/${
            data.img
          }) 50% 50%/cover no-repeat`
        }}
      >
        <p className="area">{data.area}</p>
      </div>
      <div className="speaker__info">
        <h2 className="name">{data.name}</h2>
        <p className="city">{data.city}</p>
        <p className="date">{data.date}</p>
      </div>
    </Link>
  );
}
