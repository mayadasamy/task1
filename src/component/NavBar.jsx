import React, { useEffect, useState } from "react";
import "./css/NavBar.css";
import ImgLogo from "./images/logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CiCircleList } from "react-icons/ci";

const NavBar = () => {
  const [x, setx] = useState(0);
  const [menu, setMenu] = useState(false);
  const [list, setList] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setx(window.scrollY);
    });
    window.addEventListener("resize", () => {
      let windowSize = window.innerWidth;
      windowSize <= 768 ? setMenu(true) : setMenu(false);
    });
  }, []);
  const changeMenu = () => {
    setList(!list);
    
  }

  return (
    <nav
      className="navbar"
      style={
        x < 500
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "white" }
      }
    >
      <Link>
        <img src={ImgLogo} alt="Logo" className="logo" to={"/"} />
      </Link>
      {
        menu?<CiCircleList onClick={changeMenu} size={35}/>:undefined
      }
      <ul className= {list?'list':undefined} style={menu?{display:"none"}:{display:"flex"}}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to={"/user"}>User</NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>cart</NavLink>
        </li>
      </ul>
     
      
    </nav>
  );
};

export default NavBar;
