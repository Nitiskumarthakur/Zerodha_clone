import React, { Profiler, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";
import Profile from "./Profile";

const Menu = () => {
  
  const {user} = useUser();

  //That`s 0 defined the Holding Number 0 first(Dashboard), 1(Orders)
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  
  //for styling.
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus" style={{paddingTop:"20px", paddingRight:"50px"}}>
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => setSelectedMenu("Dashboard")}
            >
              <p className={selectedMenu === "Dashboard" ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() =>  setSelectedMenu("orders")}
            >
              <p className={selectedMenu === "orders" ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          {/* <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => setSelectedMenu("holdings")}
            >
              <p className={selectedMenu === "holdings" ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li> */}
          {/* <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() =>  setSelectedMenu("positions")}
            >
              <p className={selectedMenu === "positions" ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li> */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() =>  setSelectedMenu("funds")}
            >
              <p className={selectedMenu === "funds" ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/about"
              onClick={() => setSelectedMenu("about")}
            >
              <p className={selectedMenu === "about" ? activeMenuClass : menuClass}>
                About
              </p>
            </Link>
          </li>
        </ul>
        
        <div className="profile" onClick={handleProfileClick}>
          {/* <div className="avatar"></div> */}
          <img src={user?.image} alt="logo" className="avatar" />
          <p className="username">{user?.username}</p>
        </div>
        <div style={{position:"absolute"}}>
          {isProfileDropdownOpen && <Profile/>}
        </div>
      </div>
    </div>
  );
};

export default Menu;
