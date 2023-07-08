// import { useEffect, useState } from "react";
// import { aboutUs } from "../data/about";

export default function AboutUs() {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     setData(aboutUs);
//   }, []);

  return (
    <main className="container mx-auto p-10 pt-32 h-screen">
      <div>
        <h1 className="font-mono text-center font-bold text-2xl mb-">Quienes somos</h1>
        <p className="text-justify">En Smart Tech, nos apasiona el poder de los datos y la tecnología para impulsar estrategias de marketing efectivas. Somos una empresa líder en análisis de nicho de consumidores, especializada en proporcionar insights profundos y precisos que permiten a nuestros clientes tomar decisiones informadas. Nuestro equipo de expertos en análisis de datos trabaja en estrecha colaboración con las empresas para comprender su audiencia objetivo. Mediante el uso de técnicas avanzadas de recopilación y análisis de datos, desentrañamos los patrones y comportamientos de los consumidores en diferentes nichos. A partir de los resultados de nuestros análisis detallados, ofrecemos recomendaciones personalizadas y estratégicas.</p>
      </div>
      <img src="../public/img/logo/2023-07-07_19-04.png" className="m-3"></img>
    </main>
  );
}

