import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dtax3pq",
        "smartTech_template",
        e.target,
        "jwIUtBZGozXmnvbn-"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert('Mensaje enviado correctamente!');
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="container p-10 flex flex-col justify-center items-center h-fit mt-36">
      <img
        src="../public/img/logo/2023-07-07_19-04.png"
        className=" mx-auto"
      ></img>
      <h2 className="text-4xl m-3">Contacta con nosotros</h2>

      <form
        id="form"
        className="text-center shadow-md rounded-3xl px-8 py-16 m-4 min-w-fit sm:max-w-m h-fit bg-orange-300"
        style={{ width: "100%", maxWidth: "300px" }}
        onSubmit={sendEmail}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-1xl font-bold mb-2 "
            htmlFor="name"
          >
            Nombre
          </label>
          {/* className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" */}
          <input
            id="name"
            className="shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700leading-8 focus:outline-orange-400 focus:shadow-outline"
            type="text"
            placeholder="Nombre"
            name="name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-1xl font-bold mb-2 "
            htmlFor="name"
          >
            Apellido
          </label>
          {/* className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" */}
          <input
            id="name"
            className="shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700leading-8 focus:outline-orange-400 focus:shadow-outline"
            type="text"
            placeholder="Apellido"
            name="surname"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-1xl font-bold mb-2"
            htmlFor="company"
          >
            Empresa
          </label>
          <input
            id="company"
            className="shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700leading-8 focus:outline-orange-400 focus:shadow-outline"
            type="text"
            placeholder="Empresa"
            name="company"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-1xl font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            className="shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700leading-8 focus:outline-orange-400 focus:shadow-outline"
            type="email"
            placeholder="tu@correo.com"
            name="email"
            required
          />
        </div>

        <div className="mt-10">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-1xl font-bold mb-2"
              htmlFor="subject"
            >
              Asunto
            </label>
            <input
              id="subject"
              className="shadow appearance-none border rounded w-11/12  py-2 px-3 text-gray-700leading-8 focus:outline-orange-400 focus:shadow-outline"
              type="text"
              placeholder="Asunto"
              name="subject"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-1xl font-bold mb-2"
              htmlFor="subject"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700leading-8 focus:outline-orange-400 focus:shadow-outline"
              type="text"
              rows="4"
              cols="50"
              placeholder="Tu mensaje"
              name="message"
              required
            />
          </div>

          <div>
            <input
              type="submit"
              value="Enviar"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded w-48 cursor-pinter"
            />
          </div>
        </div>
      </form>
      <img src="../public/img/home/10780.jpg" className="w-screen h-52"></img>
    </div>
  );
}
