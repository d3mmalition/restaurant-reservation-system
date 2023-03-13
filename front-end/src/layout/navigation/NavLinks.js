import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import React from "react";

const NavLinks = () => {
  return (
    <ul className="nav navbar-nav text-light" id="accordionSidebar">
      <li className="nav-item">
        <Link
          className="nav-link display"
          style={{ display: "flex", justifyContent: "center" }}
          to="/dashboard"
        >
          <div className={classes.menu_text}>&nbsp;Dashboard</div>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          style={{ display: "flex", justifyContent: "center" }}
          to="/search"
        >
          <div className={classes.menu_text}>&nbsp;Search</div>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          style={{ display: "flex", justifyContent: "center" }}
          to="/reservations/new"
        >
          <div className={classes.menu_text}>&nbsp;New Reservation</div>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          style={{ display: "flex", justifyContent: "center" }}
          to="/tables/new"
        >
          <div className={classes.menu_text}>&nbsp;New Table</div>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
