/* eslint-disable react/prop-types */
import { useState } from "react";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";


function Nav({ intro, menu, setContent }) {
  const [showMediaIcon , setShowMediaIcon]=useState();
  const { home, aboutUs, portfolio, services, contact } = menu;
  return (
    <>
      <div className="Navigation">
        <div className="Introduction" style={{ color: "#162171" }}>
          {intro}
        </div>
        <div className={showMediaIcon ? "mobile-menu-link" : "nav-links"}>
          
          <ul>
            <li onClick={() => setContent("Home")}>
              <a href="#">{home}</a>
            </li>
            <li onClick={() => setContent("About Us")}>
              <a href="#">{aboutUs}</a>
            </li>
            <li onClick={()=> setContent("Portfolio")}>
              <a href="#">{portfolio}</a>
            </li>
            <li onClick={() => setContent("Services")}>
              <a href="#">{services}</a>
            </li>
            <li onClick={() => setContent("Contact Us")}>
              <a href="#">{contact}</a>
            </li>
          </ul>
        </div>
       
        <div className="Hambergmenu" onClick={() => setShowMediaIcon(!showMediaIcon)}>
          <a href="#">
          <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
