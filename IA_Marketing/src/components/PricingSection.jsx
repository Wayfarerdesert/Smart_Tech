import { CheckIcon } from "@heroicons/react/20/solid";

const standardFeatures = ["Acceso a una consulta", "Dashboard personalizado"];

const proFeatures = [
  "Acceso a dos consulta",
  "Dashboard personalizado",
  "Soporte online",
];

const premiumFeatures = [
  "Consultas ilimitadas",
  "Dashboard personalizado",
  "Predicción de ventas",
  "Soporte online",
  "Soporte telefónico 24/7",
];

export default function PricingSection() {
  return (
    <div className="bg-white py-24 sm:py-32 h-fit mb-96 flex-grow">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros Planes
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nuestros planes Smart Tech <b>Standard, Pro y Premium</b> son
            opciones que ofrecemos para satisfacer las diferentes necesidades de
            nuestros clientes. Queremos que nuestros planes sean simples y
            transparentes, sin trucos ocultos.
          </p>
        </div>

        {/* PLANS CONTAINER */}
        <div className="container grid grid-cols-1 gap-10 sm:grid-cols-3 ">
          {/* PLAN STANDARD */}
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none  hover:scale-105 hover:shadow-lg">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-center text-gray-900">
                Smart Tech Standard
              </h3>
              <p className="mt-6 text-base leading-7 text-center text-gray-600">
                El plan <b>Standard</b> es una opción básica que proporciona
                características y servicios esenciales a un precio asequible.
                Está diseñado para aquellos que buscan una solución confiable y
                funcional sin demasiados extras.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold text-center leading-6 text-orange-500">
                  Que incluye
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {standardFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-orange-400"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-16 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 mt-32">
                  <div className="mx-auto max-w-xs px-8 ">
                    <p className="text-base font-semibold text-gray-600">
                      Paga una vez, poseelo para siempre
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        €99
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        EUR
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-orange-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                    >
                      Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Facturas y recibos disponibles para facilitar el reembolso
                      de la empresa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PLAN TECH PRO */}
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none  hover:scale-105 hover:shadow-lg">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-center text-gray-900">
                Smart Tech Pro
              </h3>
              <p className="mt-6 text-base leading-7 text-center text-gray-600">
                El plan <b>Pro</b> es una actualización de nuestro plan
                estándar, ofreciendo características adicionales y mejoradas.
                Está dirigido a aquellos usuarios que desean aprovechar al
                máximo nuestras herramientas y funciones avanzadas.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold text-center leading-6 text-orange-500">
                  Que incluye
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {proFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-orange-400"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 mt-20">
                  <div className="mx-auto max-w-xs px-8 ">
                    <p className="text-base font-semibold text-gray-600">
                      Paga una vez, poseelo para siempre
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        €149
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        EUR
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-orange-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                    >
                      Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Facturas y recibos disponibles para facilitar el reembolso
                      de la empresa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PLAN PRMIUM */}
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none  hover:scale-105 hover:shadow-lg">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-center text-gray-900">
                Smart Tech Premium
              </h3>
              <p className="mt-6 text-base leading-7 text-center text-gray-600">
                El plan <b>Premium</b> es nuestra oferta de más alta gama,
                diseñada para aquellos que buscan una experiencia premium y
                todas las funcionalidades de nuestra plataforma. Incluye
                características exclusivas, soporte prioritario y acceso a
                contenido premium adicional.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold text-center leading-6 text-orange-500">
                  Que incluye
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {premiumFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-orange-400"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 mt-6">
                  <div className="mx-auto max-w-xs px-8 ">
                    <p className="text-base font-semibold text-gray-600">
                      Paga una vez, poseelo para siempre
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        €199
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        EUR
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-orange-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                    >
                      Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Facturas y recibos disponibles para facilitar el reembolso
                      de la empresa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
