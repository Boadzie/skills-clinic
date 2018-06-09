import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Nav />
      <div className="header-text">
        <h1>21st Century Skills Clinic</h1>
        <a href="" className="btn red">
          Discover
        </a>
        <a href="" className="btn blue">
          Develop
        </a>
        <a href="" className="btn green">
          Use
        </a>
      </div>
    </header>
  );
};

const Nav = () => {
  return (
    <nav>
      <a href="">
        <span>21st</span> Century Skills
      </a>
      <ul className="main-nav">
        <li>
          <a href="">Sign Up</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
