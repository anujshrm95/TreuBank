import React from "react";
import "../index.css";
import { MenuIcon } from "@heroicons/react/solid";

function Header() {
  // const navItems = [];

  return (
    <header className="container flex justify-between shadow-md md:shadow-none h-25 ">
      <img
        className="md:hidden lg:inline-flex"
        src="./images/treubank_logo.png"
        alt=""
        width="120"
      />
      <img
        className="hidden md:inline-block lg:hidden"
        src="./images/logo.png"
        alt=""
        width="45"
      />
      <div className="flex items-center">
        <MenuIcon className="h-10 md:hidden" />
        <div className="hidden md:flex items-center space-x-3 lg:space-x-10 ">
          {/* <div className="hidden max-w-xl md:grid gap-4 grid-cols-4 text-right"> */}
          <p className="nav-item">Home</p>
          <p className="nav-item">Features</p>
          <p className="nav-item">About</p>
          <p className="nav-item">Contact</p>
          {/* </div> */}

          {/* <button className="secondary-button">Sign in</button> */}
          <button className="primary-button">Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
