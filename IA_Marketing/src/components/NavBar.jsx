import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";


function NavBar() {

  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="w-10 h-10" src="../public/img/logo/2023-07-07_19-08.png" alt="LOGO"/></a>
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
                <a className="nav-link active hover:bg-orange-400" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover:bg-orange-400" href="#">
                  Sobre Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover:bg-orange-400" href="#">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover:bg-orange-400" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <a className="nav-link text-2xl hover:text-3xl cursor-pointer" onClick={() => loginWithRedirect()}><FontAwesomeIcon icon={faRightToBracket}
           /></a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
