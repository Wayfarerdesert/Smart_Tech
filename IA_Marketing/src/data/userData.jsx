// // nombre de empresa y usuario dinamico
// const userName = 'Juan Pérez';
// const userCompany = 'Volkswagen';

// export { userName, userCompany };

import React, { useEffect, useState } from "react";
import axios from "axios";

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
        const { nombre, empresa } = response.data; // Asumiendo que la respuesta tiene un formato de JSON con campos "nombreUsuario" y "nombreEmpresa"
        console.log(response.data);
        // Actualizar el estado con los datos obtenidos
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
      <div>{userName}</div>
      <div>{userCompany}</div>
    </div>
  );
};

export default UserData;
