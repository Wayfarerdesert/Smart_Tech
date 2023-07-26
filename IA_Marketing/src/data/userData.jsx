import { useEffect, useState } from "react";
import axios from "axios";

const UserData = () => {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userCompany, setUserCompany] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener el idCliente almacenado en el localStorage
    const idCliente = localStorage.getItem("idCliente");

    // Función para obtener los datos del usuario desde el backend con el idCliente
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/usuarios/usuario/${idCliente}`
        );
        // console.log("Nombre de Empresa:", response.data.data.empresa);
        const empresa = response.data.data.empresa;
        const nombre = response.data.data.nombre;
        const apellido = response.data.data.apellido;

        setUserName(nombre);
        setUserSurname(apellido);
        setUserCompany(empresa);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
        setLoading(false); // Marcar que los datos han sido cargados, incluso en caso de error.
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return {
    userName,
    userSurname,
    userCompany,
  };
};

export default UserData;
