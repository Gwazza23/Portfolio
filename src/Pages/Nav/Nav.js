import "./Nav.css";
import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function Nav() {
  const [mode, setMode] = useState(false);
  const navigate = useNavigate();
  function redirectHome() {
    navigate("/");
  }
  function handleMode() {
    document.body.classList.toggle("dark-theme");
    setMode(!mode);
  }
  return (
    <>
      <div className="nav-container">
        <div className="nav-content-wrapper">
          <img
            src={
              mode
                ? "/media/portfolio-logo-light.png"
                : "/media/portfolio-logo-dark.png"
            }
            alt="logo"
            onClick={redirectHome}
          />
          <div className="nav-links">
            <NavLink>About</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Contact</NavLink>
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
