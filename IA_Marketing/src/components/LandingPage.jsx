// import { useEffect, useState } from "react";
// import { aboutUs } from "../data/about";

export default function Home() {
  //   const [data, setData] = useState("");

  //   useEffect(() => {
  //     setData(aboutUs);
  //   }, []);

  return (
    <main className="container m-auto px-10 pt-32 h-fit ">
      <div>
        <div className="flex items-center justify-center">
          <img
            src="../public/img/logo/2023-07-07_19-04.png"
            className="my-16 pt-8"
          ></img>
          <span className="text-orange-500 ont-mono text-center font-bold text-5xl mb-10 mt-20 pr-7">
            :
          </span>
          <h1 className="font-mono text-center font-bold text-5xl mb-10 mt-24">
            Datos, Tecnología, Resultados
          </h1>
        </div>

        <div>
          <div className="flex items-center justify-center">
            <img
              src="../public/img/home/social-media-marketing.png"
              className="my-16 mr-16 pt-8 w-96 h-"
            ></img>

            <div>
              <h1 className="font-mono text-center font-bold text-5xl mb-10 mt-20 ">
                Quienes somos
              </h1>

              <p className="text-justify text-1xl">
                En Smart Tech, nos apasiona el poder de los datos y la
                tecnología para impulsar estrategias de marketing efectivas.
                Somos una empresa líder en análisis de nicho de consumidores,
                especializada en proporcionar insights profundos y precisos que
                permiten a nuestros clientes tomar decisiones informadas.
                Nuestro equipo de expertos en análisis de datos trabaja en
                estrecha colaboración con las empresas para comprender su
                audiencia objetivo. Mediante el uso de técnicas avanzadas de
                recopilación y análisis de datos, desentrañamos los patrones y
                comportamientos de los consumidores en diferentes nichos. A
                partir de los resultados de nuestros análisis detallados,
                ofrecemos recomendaciones personalizadas y estratégicas.
              </p>
            </div>
          </div>
        </div>
        <img
          src="../public/img/home/10780.jpg"
          className=" mr-16 pt-8 w-screen h-52"
        ></img>
      </div>
    </main>
  );
}
