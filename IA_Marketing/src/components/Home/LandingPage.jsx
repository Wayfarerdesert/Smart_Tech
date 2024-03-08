import { aboutUs } from "../../data/smartTech";

export default function Home() {
  return (
    <main className="container m-auto px-10 pt-32 h-fit ">
      <div>
        <div className="flex items-center justify-center">
          <img
            src="../img/logo/2023-07-07_19-04.png"
            className="my-16 pt-8 w-180"
          ></img>
        </div>

        <h1 className="font-mono text-center font-bold text-5xl mb-10 text-md-3xl">
          Datos, Tecnología, Resultados
        </h1>

        <div>
          <div className="flex items-center justify-center">
            {/* <img
              src="../img/home/social-media-marketing.png"
              className="my-16 mr-16 pt-8 w-96"
            ></img> */}

            <div className="w-2/4">
              {aboutUs.map((about) => (
                <div key={about.id}>
                  <h1 className="font-mono text-center font-bold text-5xl mb-10 mt-20">
                    {about.title}
                  </h1>
                  <p className="text-justify text-2xl">{about.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img
          src="../img/home/10780.jpg"
          className=" mr-16 pt-8 w-screen h-52"
        ></img>
      </div>
    </main>
  );
}
