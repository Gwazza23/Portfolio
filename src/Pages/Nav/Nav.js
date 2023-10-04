import "./Nav.css";
import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function Nav() {
  const [mode, setMode] = useState(false);
  const navigate = useNavigate();
  console.log(mode);
  function redirectHome() {
    navigate("/");
  }
  function handleMode() {
    setMode(!mode);
    document.body.classList.toggle("dark-theme");
  }
  return (
    <>
      <div className="nav-container">
        <div className="nav-content-wrapper">
          <img
            src={"media/portfolio-logo.webp"}
            alt="logo"
            onClick={redirectHome}
          />
          <div className="nav-links">
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/projects"}>Projects</NavLink>
            <NavLink to={"/contacts"}>Contact</NavLink>
          </div>
          <button className="mode-switch" onClick={handleMode}>
            {mode ? <BsFillSunFill /> : <BsFillMoonFill />}
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
