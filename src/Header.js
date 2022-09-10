import React from "react";
import "./Header.css";
import { FaHome, FaSearch, FaPlayCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FcFlashOn } from "react-icons/fc";
import { HiCollection } from "react-icons/hi";

function Header() {
  //BEM naming classes
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon  header__icon--active">
          <FaHome className="icon" />
          <p>Home</p>
        </div>

        <div className="header__icon">
          <FcFlashOn className="icon" />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <FaPlayCircle className="icon" />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <HiCollection className="icon" />
          <p>Collection</p>
        </div>
        <div className="header__icon">
          <FaSearch className="icon" />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <CgProfile className="icon" />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="hulu logo"
      />
    </div>
  );
}

export default Header;
