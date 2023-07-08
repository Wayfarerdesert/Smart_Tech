import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";

export default function ContactForm() {
  return (
    <div className="container mx-auto p-10 h-screen">
      <form
        id="form"
        className="text-center"
        style={{ width: "100%", maxWidth: "300px" }}
      >
        <h2 className="text-3xl m-3">Contacta con nosotros</h2>

        <MDBInput label="Nombre" v-model="name" wrapperClass="mb-4" required/>

        <MDBInput label="Empresa" v-model="company" wrapperClass="mb-4" required/>

        <MDBInput
          type="email"
          label="email"
          v-model="email"
          wrapperClass="mb-4"
          required
        />

        <MDBInput label="Subject" v-model="subject" wrapperClass="mb-4" required/>

        {/* <MDBTextArea wrapperClass='mb-4' label='Message' /> */}

        <MDBCheckbox
          wrapperClass="d-flex justify-content-center"
          label="Enviame una copia"
        />

        <MDBBtn color="warning" block className="my-4">
          Enviar
        </MDBBtn>
      </form>
    </div>
  );
}
