// // nombre de empresa y usuario dinamico
// const userName = 'Juan Pérez';
// const userCompany = 'Volkswagen';

import React, { useEffect, useState } from "react";
import axios from "axios";
import DropdownUser from "../components/DropdownUser";
import Profile from "../pages/Profile";

const UserData = () => {
  const [userName, setUserName] = useState("");
  const [userCompany, setUserCompany] = useState("");

  useEffect(() => {
    // Obtener el idCliente almacenado en el localStorage
    const idCliente = localStorage.getItem("idCliente");

    // Función para obtener los datos del usuario desde el backend con el idCliente
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/usuarios/usuario/${idCliente}`
        );
        console.log(response.data.data.empresa)
        const empresa = response.data.data.empresa;
        const nombre = response.data.data.nombre;

        setUserName(nombre);
        setUserCompany(empresa);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, []); // El efecto se ejecutará solo una vez al montar el componente
  return (
    <div>
      <DropdownUser userName={userName} userCompany={userCompany} />
      <Profile userName={userName} userCompany={userCompany} />
    </div>
  );
};

export default UserData;
