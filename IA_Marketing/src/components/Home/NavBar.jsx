import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink, redirect, useLocation } from "react-router-dom";
import DropdownUser from "../DropdownUser";
import "../../index.css";

function NavBar() {
  // Ocultar boton de login en el dashboard
  const location = useLocation();
  const isUserRoute =
    location.pathname === "/user" || location.pathname.startsWith("/user/");

  // Logo redirige a home
  const redirectToHome = () => {
    if (isUserRoute) {
      window.location.href = "/user";
    } else {
      window.location.href = "/";
    }
  };

  // Login redirige a signIn
  const handleIconClick = () => {
    window.location.href = "http://localhost:5173/SignIn";
  };

  // Oculta el navbar completo dentro del dashboard
  // if (isUserRoute) {
  //   return null; // Hide the entire NavBar for /user and its descendants
  // }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top p-3 border-b-2 border-orange-400">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={redirectToHome}>
            <img
              className="w-45 h-12 d-none d-md-block"
              src="../public/logo.png"
              alt="LOGO"
            />
            <img
              className="w-10 h-10 d-none d-sm-block d-md-none"
              src="../public/img/logo/2023-07-07_19-08.png"
              alt="LOGO"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* className="justify-content-center align-items-center collapse navbar-collapse" */}
          <div
            className="hidden lg:flex justify-content-center align-items-center navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link hover:bg-orange-500 hover:text-orange-200 hover"
                  aria-current="page"
                  // activeClassName="active-link"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Team"
                  className="nav-link hover:bg-orange-500 hover:text-orange-200 hover"
                  aria-current="page"
                  // activeClassName="active-link"
                >
                  Sobre Nosotros
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/PricingSection"
                  className="nav-link hover:bg-orange-500 hover:text-orange-200 hover"
                  aria-current="page"
                  // activeClassName="active-link"
                >
                  Servicios
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className="nav-link hover:bg-orange-500 hover:text-orange-200 hover"
                  aria-current="page"
                  // activeClassName="active-link"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
          {!isUserRoute && (
            <FontAwesomeIcon
              icon={faRightToBracket}
              className="nav-link text-2xl hover:text-orange-400 cursor-pointer"
              onClick={handleIconClick}
            />
          )}

          {/* <FontAwesomeIcon
            icon={faRightToBracket}
            className="nav-link text-2xl hover:text-orange-400 cursor-pointer"
            onClick={handleIconClick}
          /> */}

          <DropdownUser />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
