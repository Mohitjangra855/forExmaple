import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios  from "axios";
const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu  selected";
const handleClick=async()=>{
await axios.get("http://localhost:3002/logout")
}
  return (
    <div className="menu-container">
      <img src="logo.png" alt="image_image" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => {
                handleMenuClick(0);
              }}
            >
              <p className={selectMenu === 0 ? activeMenuClass : menuClass}>
                {" "}
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => {
                handleMenuClick(1);
              }}
            >
              <p className={selectMenu === 1 ? activeMenuClass : menuClass}>
                {" "}
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => {
                handleMenuClick(2);
              }}
            >
              <p className={selectMenu === 2 ? activeMenuClass : menuClass}>
                {" "}
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => {
                handleMenuClick(3);
              }}
            >
              <p className={selectMenu === 3 ? activeMenuClass : menuClass}>
                {" "}
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => {
                handleMenuClick(4);
              }}
            >
              <p className={selectMenu === 4 ? activeMenuClass : menuClass}>
                {" "}
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => {
                handleMenuClick(5);
              }}
            >
              <p className={selectMenu === 5 ? activeMenuClass : menuClass}>
                {" "}
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
            {" "}
            <Link to="/signup" className="username">
              Signup
            </Link>
          </div>
        </div>
        <div className="profile" onClick={handleProfileClick}>
          <Link to="/login" className="username">
            Login
          </Link>
        </div>
        <div className="profile" onClick={handleProfileClick}>
          <Link to="/" onClick={handleClick} className="username">
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
