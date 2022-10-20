import React from "react";
import classes from "./Navbar.module.css";
import collegeLogo from "../images/collegesitelogo-removebg-preview.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={classes.navbar}>
        <img
          src={collegeLogo}
          alt=""
          width="65"
          height="60"
          className="Logo"
          style={{ marginTop: "14px", marginLeft: "10px" }}
        />
        <h3 style={{ marginTop: "27px", marginLeft: "20px" }}>St. Mary's</h3>
        <ul className={classes.Links}>
          <li
            style={{ marginLeft: "15px", fontWeight: "bolder" }}
            key={Link.id}
          >
            <Link
              to="/About"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </Link>
          </li>
          <li
            style={{ marginLeft: "15px", fontWeight: "bolder" }}
            key={Link.id}
          >
            <Link
              to="/Courses"
              style={{ textDecoration: "none", color: "inherit" }}
              key={Link.id}
            >
              Courses
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
