import { people, team } from "../../data/smartTech";

export default function Team() {
  return (
    <div className="py-15 sm:py-32 h-full mb-32 flex-grow" id="team">
      <div className="mx-auto gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl mx-auto sm:text-center pb-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{team}</p>
        </div>
        <ul
          role="list"
          className="grid gap-x-3 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-3 mx-36 md:mx-16"
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
                <p className="text-sm font-semibold leading-6 text-orange-400">
                  {person.role}
                </p>
                <p className="text-justify px-10 lg:px-28 py-4">
                  {person.about}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
