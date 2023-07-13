const people = [
  {
    name: "Facundo Santana",
    role: "Frontend",
    image: "../public/img/team/1679238015203_f.jpg",
    about:
      "Nuestro experto en frontend es un apasionado del diseño y la usabilidad. Con habilidades excepcionales en HTML, CSS y JavaScript, este miembro del equipo transforma conceptos en interfaces de usuario atractivas y altamente funcionales. Su enfoque centrado en el usuario garantiza que cada interacción sea intuitiva y agradable.",
  },
  {
    name: "Lourdes Bonucci",
    role: "Backend",
    image: "../public/img/team/1680598483639_l.jpg",
    about:
      "Nuestra gurú del backend es una desarrolladora experimentada que domina los lenguajes de programación y las tecnologías de servidor. Con una profunda comprensión de la arquitectura y la seguridad, este miembro del equipo construye sistemas robustos y escalables. Su experiencia garantiza que los servidores y bases de datos funcionen de manera eficiente y confiable.",
  },
  {
    name: "Carmen Cristini",
    role: "Data Science",
    image: "../public/img/team/1684922168233_c.jpg",
    about:
      "Nuestra científico de datos es una experta en el análisis y la interpretación de grandes conjuntos de datos. Con sólidos conocimientos en estadísticas y algoritmos, este miembro del equipo descubre patrones ocultos y tendencias significativas. Su experiencia en machine learning y data mining permite obtener información valiosa que impulsa la toma de decisiones estratégicas.",
  },
];

export default function Team() {
  return (
    <div className="bg-white py-15 sm:py-32 h-screen mb-32 flex-grow" id="team">
      <div className="mx-auto gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl mx-auto sm:text-center pb-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nuestro equipo de profesionales altamente capacitados trabajan en
            estrecha colaboración para ofrecer soluciones completas y eficientes
            a nuestros clientes. Su enfoque interdisciplinario garantiza que
            cada proyecto se beneficie de una combinación perfecta de diseño
            atractivo, funcionalidad sólida y análisis de datos profundos.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3 mx-36 md:mx-16"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex flex-col items-center gap-y-2">
                <img
                  className="h-40 w-40 rounded-full"
                  src={person.image}
                  alt=""
                />
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {person.role}
                </p>
                <p className="text-justify px-10 lg:px-28 py-4">{person.about}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
