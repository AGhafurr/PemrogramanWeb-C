// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // ...
    <ul class="navbar-nav w-100 d-flex justify-content-center">
      <li class="nav-item">
        <Link class="nav-link active fw-bold" to="/">
          Home
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active fw-bold" to="/about">
          About Us
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active fw-bold" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
    // ...
  );
}

export default Navbar;
