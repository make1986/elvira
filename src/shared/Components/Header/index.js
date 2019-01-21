import React from "react";
import { Link } from "react-router-dom";

export default function Header({ image }) {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <img src={`${image}/logo.jpg`} />
        </Link>
        <div className="header-menu">
          <Link to="/#events">Мероприятия</Link>
          <Link to="/#partner">Партнерам</Link>
          <Link to="/#contacts">Контакты</Link>
        </div>
      </div>
    </div>
  );
}
