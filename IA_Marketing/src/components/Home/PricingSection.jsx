import React from "react";
import { services } from "../../data/smartTech";

export default function PricingSection() {
  const redirectToLogIn = () => {
    window.location.href = "/SignIn";
  };

  return (
    <div className="bg-white py-24 sm:py-32 h-fit mb-96 flex-grow">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {services[0].title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <span
              dangerouslySetInnerHTML={{ __html: services[0].description }}
            />
          </p>
        </div>

        {/* PLANS CONTAINER */}
        <div className="container grid grid-cols-1 gap-10 sm:grid-cols-3">
          {services.slice(1).map((plan) => (
            <div
              key={plan.title}
              className="mx-auto mt-16 max-w-3xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none  hover:scale-105 hover:shadow-lg"
            >
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-center text-gray-900">
                  {plan.title}
                </h3>
                <p className="mt-6 text-base leading-7 text-center text-gray-600">
                  <span dangerouslySetInnerHTML={{ __html: plan.features }} />
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold text-center leading-6 text-orange-500">
                    {plan.includes.subtitle}
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {plan.includes.benefits.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-16 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 mt-32">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">
                        {plan.payment}
                      </p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                          {plan.value}
                        </span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                          {plan.currency}
                        </span>
                      </p>
                      <a
                        href="#"
                        className="mt-10 block w-full rounded-md bg-orange-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                        onClick={redirectToLogIn}
                      >
                        Adquirir plan
                      </a>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        {plan.invoices}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
