import React, { useEffect } from "react";
import "./main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function MainPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="main_page_wrapper">
      <div className="main_page_text" data-aos="fade-right" data-aos-duration="1000">
        <h1>FAZO - raqamli kelajak markazi</h1>
        <p>
          Bizning professional dasturchilarimiz sizning biznesingizni tezroq,
          aqlli va samarali ishlashi uchun yuqori sifatli dasturlarni ishlab
          chiqaradi.
        </p>

        <div className="header_btn">
          <NavLink to="/">
            <div class="header_button cta">
              <span>Boshlash</span>
            </div>
          </NavLink>
        </div>
      </div>
      <div class="lines" data-aos="fade-left" data-aos-duration="1000">
        <div class="line" data-aos="fade-left" data-aos-duration="1000"></div>
        <div class="line" data-aos="fade-left" data-aos-duration="1000"></div>
        <div class="line" data-aos="fade-left" data-aos-duration="1000"></div>
        <div class="line" data-aos="fade-left" data-aos-duration="1000"></div>
        <div class="line" data-aos="fade-left" data-aos-duration="1000"></div>
      </div>
    </div>
  );
}

export default MainPage;
