import React, { useEffect } from "react";
import "./nav-bar.css";
import { NavLink } from "react-router-dom";
import navLogo from "../../assets/icons/logo.png"

import AOS from "aos";
import "aos/dist/aos.css";

function NavBar() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <nav>
      <div
        className="nav_wrapper"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="nav_left_log">
          <NavLink to="/">
         <img src={navLogo} alt="fazo logo" />
          </NavLink>
        </div>
        <div className="nav_right_menu">
          <NavLink to="/about-us">
            <p>Biz haqimizda</p>
          </NavLink>
          <NavLink to="/projects">
            <p>Loyihalar</p>
          </NavLink>
          <NavLink to="/team">
            <p>Hodimlar</p>
          </NavLink>
          <NavLink to="/contacts">
            <p>Bog'lanish</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
