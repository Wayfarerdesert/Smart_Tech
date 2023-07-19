import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "../../index.css";


function NavBar() {

  const redirectToHome = () => {
    window.location.href = "/";
  };

  const handleIconClick = () => {
    window.location.href = "http://localhost:5173/SignIn";
  };

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
            <ul className="navbar-nav space-x-3.5">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link rounded hover:bg-orange-500 hover:text-orange-200 hover"
                  aria-current="page"
                  // activeClassName="active-link"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Team"
                  className="nav-link rounded hover:bg-orange-500 hover:text-orange-200 hover"
                  aria-current="page"
                  // activeClassName="active-link"
                >
                  Sobre Nosotros
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/PricingSection"
                  className="nav-link rounded hover:bg-orange-500 hover:text-orange-200 hover"
                  aria-current="page"
                  // activeClassName="active-link"
                >
                  Servicios
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className="nav-link rounded hover:bg-orange-500 hover:text-orange-200 hover"
                  aria-current="page"
                  // activeClassName="active-link"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
          <NavLink
                  to="/SignIn"
                  className="flex nav-link rounded p-2 hover:bg-orange-500 hover:text-orange-200 hover cursor-pointer"
                  aria-current="page"
                  // activeClassName="active-link"
                >
                  <span className="mr-2">Iniciar sesión</span>
                    <FontAwesomeIcon
                        icon={faRightToBracket}
                        className="nav-link text-2xl "
                        onClick={handleIconClick} />
                </NavLink>
          </div>
          {/* hover:text-orange-400 */}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
