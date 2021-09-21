import React from "react";
import { Link } from "react-router-dom";
import { LocalActivity, AddBox } from "@material-ui/icons";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__link logo" to="/">
        Skill Tracker
      </Link>
      <Link className="nav__link" to="/add">
        <AddBox />
      </Link>
    </nav>
  );
}

export default Nav;
