import React from "react";

export default function ContactForm() {
  return (
    <div className="container p-10 flex flex-col justify-center items-center h-screen mt-36 mb-60">
      <img src="../public/img/logo/2023-07-07_19-04.png" className="m-16 mx-auto"></img><h2 className="text-5xl m-3">Contacta con nosotros</h2>
      <form
        id="form"
        className="text-center shadow-md rounded px-16 pt-16 pb-16 m-4 min-w-full sm:max-w-m"
        style={{ width: "100%", maxWidth: "300px" }}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-2xl font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          {/* className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" */}
          <input
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-10 focus:outline focus:shadow-outline"
            type="text"
            placeholder="Nombre"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-2xl font-bold mb-2"
            htmlFor="company"
          >
            Empresa
          </label>
          <input
            id="company"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-10 focus:outline focus:shadow-outline"
            type="text"
            placeholder="Empresa"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-2xl font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-10 focus:outline focus:shadow-outline"
            type="email"
            placeholder="tu@correo.com"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-2xl font-bold mb-2"
            htmlFor="subject"
          >
            Asunto
          </label>
          <input
            id="subject"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-10 focus:outline focus:shadow-outline"
            type="text"
            placeholder="Asunto"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-2xl font-bold mb-2">
            <input className="mr-2 leading-normal" type="checkbox" />
            <span className="text-sm">Enviame una copia</span>
          </label>
        </div>

        <button
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded w-48 h- focus:outline-none focus:shadow-outline"
          type="button"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
