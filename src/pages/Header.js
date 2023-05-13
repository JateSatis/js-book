import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaProjectDiagram } from "react-icons/fa";

import { LessonsContext } from "../App";

const Header = () => {
  const { toggleTheme } = useContext(LessonsContext);

  return (
    <header className="header">
      <NavLink
        className={({ isActive }) =>
          isActive ? "active_link header__link" : "header__link"
        }
        to="/"
      >
        <FaProjectDiagram className="header__link_logo" />
      </NavLink>
      <button className="header__theme" onClick={toggleTheme}>
        <FaMoon className="header__theme_logo"></FaMoon>
      </button>
    </header>
  );
};

export default Header;
