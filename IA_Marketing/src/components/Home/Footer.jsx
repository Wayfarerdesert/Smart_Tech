import React from "react";
import { Link } from "react-router-dom";

import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="py-20 mt-auto">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-orange-500">
                Smart Tech
              </h6>
              <p className="text-justify">
                Si buscas una compañía confiable y experta en análisis de nicho
                de consumidores, Smart Tech es tu socio estratégico. Permítenos
                ayudarte a desbloquear el potencial de tu audiencia y llevar tu
                estrategia de marketing al siguiente nivel
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-orange-500">
                Links de utilidad
              </h6>

              <Link to="/PricingSection">
                <p className="text-reset">Pricing</p>
              </Link>

              <Link to="/Contact">
                <p className="text-reset">FAQ's</p>
              </Link>

              <Link to="/Contact">
                <p className="text-reset">Help</p>
              </Link>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-orange-500">
                Contacto
              </h6>
              <p>Barcelona, Catalunya 08018</p>
              <p>info@smarttech.com</p>
              <section className="space-x-10 py-4 ">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-5xl hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-5xl hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-5xl hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                />
              </section>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright{" "}
        <span className="font-bold text-xl">smarttech.com</span>
      </div>
    </MDBFooter>
  );
}
