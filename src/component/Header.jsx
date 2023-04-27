import React from "react";
import { Link } from "react-router-dom";
import "../component/css/header.css";
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link class="navbar-brand" to="/">
            E-Com
          </Link>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home{" "}
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/menProduct">
                Men{" "}
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/womenProduct">
                Women{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
