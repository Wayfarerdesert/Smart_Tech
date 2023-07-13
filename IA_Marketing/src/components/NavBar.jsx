import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";

function NavBar() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              className="w-10 h-10"
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
                  activeClassName="active-link"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Team"
                  className="nav-link hover:bg-orange-500 hover:text-orange-200 hover"
                  aria-current="page"
                  activeClassName="active-link"
                >
                  Sobre Nosotros
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/PricingSection"
                  className="nav-link hover:bg-orange-500 hover:text-orange-200 hover"
                  aria-current="page"
                  activeClassName="active-link"
                >
                  Servicios
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className="nav-link hover:bg-orange-500 hover:text-orange-200 hover"
                  aria-current="page"
                  activeClassName="active-link"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
          <a
            className="nav-link text-2xl hover:text-orange-400 cursor-pointer"
            onClick={() => loginWithRedirect()}
          >
            <FontAwesomeIcon icon={faRightToBracket} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
