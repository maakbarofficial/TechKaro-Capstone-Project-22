import React, { useState, useEffect } from "react";
import "./HeaderStyle.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
// import phone from '../../Images/phone.png'
import { FaBars, FaPhoneAlt, FaSearch, FaTimes } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const handclick = () => setClick(!click);

  useEffect(() => {
    const handleScroll = (event) => {
      console.log("window.scrollY", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className={click ? "header-container active" : "header-container"}>
          <div className={click ? "logo active" : "logo"}>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className={click ? "navbar active" : "navbar"}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Solutions</Link>
              </li>
              <li>
                <Link to="/Cart">Resources</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className={click ? "search-box active" : "search-box"}>
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
          <div className={click ? "phone-btn active" : "phone-btn"}>
            <div className="phone-icon">
              <FaPhoneAlt />
            </div>
            <p className="phone-number">+92(000) 984 2020</p>
          </div>
          <div className={click ? "header-btn active" : "header-btn"}>
            <button className="appointment-btn">Appointment</button>
          </div>
          <div className="hamburger" onClick={handclick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#2279fc" }} />
            ) : (
              <FaBars size={20} style={{ color: "#2279fc" }} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
