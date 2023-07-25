// Sobre la empresa
const aboutUs = [
    {
        id: 0,
        title: 'Quienes somos',
        description: 'En Smart Tech, nos apasiona el poder de los datos y la tecnología para impulsar estrategias de marketing efectivas. Somos una empresa líder en análisis de nicho de consumidores, especializada en proporcionar insights profundos y precisos que permiten a nuestros clientes tomar decisiones informadas. Nuestro equipo de expertos en análisis de datos trabaja en estrecha colaboración con las empresas para comprender su audiencia objetivo.Mediante el uso de técnicas avanzadas de recopilación y análisis de datos, desentrañamos los patrones y comportamientos de los consumidores en diferentes nichos.A partir de los resultados de nuestros análisis detallados, ofrecemos recomendaciones personalizadas y estratégicas.'
    }
]

// El equipo
const team = " Nuestro equipo de profesionales altamente capacitados trabajan en estrecha colaboración para ofrecer soluciones completas y eficientes a nuestros clientes. Su enfoque  interdisciplinario garantiza que cada proyecto se beneficie de una combinación perfecta de diseño atractivo, funcionalidad sólida y análisis de datos profundos."

const people = [
    {
        name: "Eva Huertas",
        role: "Frontend",
        image: "../public/img/team/1680077507534.jpg",
        about:
            "Nuestra diseñadora UX y parte del equipo frontend, es talentosa en el ámbito del diseño y la programación. Su enfoque meticuloso y centrado en el usuario le permite comprender las necesidades y deseos de los usuarios finales, traduciéndolos en soluciones de diseño intuitivas y atractivas. Es una maestra en la creación de diseños responsivos y adaptables, asegurándose de que nuestras interfaces se vean y funcionen perfectamente en diferentes dispositivos y tamaños de pantalla.",
    },
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

// Servicios y precios
const services = [{
    title: "Nuestros Planes",
    description: "Nuestros planes Smart Tech <b>Standard, Pro y Premium</b> son opciones  que ofrecemos para satisfacer las diferentes necesidades de nuestros clientes. Queremos que nuestros planes sean simples y transparentes, sin trucos ocultos.",
},
{
    title: "Smart Tech Standard",
    features: "El plan <b>Standard</b> es una opción básica que proporciona características y servicios esenciales a un precio asequible. Está diseñado para aquellos que buscan una solución confiable y funcional sin demasiados extras.",
    includes: {
        subtitle: "Que incluye",
        benefits: ["Acceso a una consulta", "Dashboard personalizado"]
    },
    payment: "Suscripción Mensual",
    value: "€29",
    cents: "<sup>99</sup>",
    currency: "EUR",
    invoices: "Facturas y recibos disponibles para facilitar el reembolso de la empresa"
},
{
    title: "Smart Tech Pro",
    features: "El plan <b>Pro</b> es una actualización de nuestro plan estándar ofreciendo características adicionales y mejoradas. Está dirigido a aquellos suarios que desean aprovechar al máximo nuestras herramientas y funciones avanzadas.",
    includes: {
        subtitle: "Que incluye",
        benefits: [
            "Acceso a dos consulta",
            "Dashboard personalizado",
            "Soporte online",
        ]
    },
    payment: "Suscripción Mensual",
    value: "€49",
    cents: "<sup>99</sup>",
    currency: "EUR",
    invoices: "Facturas y recibos disponibles para facilitar el reembolso de la empresa"
},
{
    title: "Smart Tech Premium",
    features: "El plan <b>Premium</b> es nuestra oferta de más alta gama, diseñada para quellos que buscan una experiencia premium y todas las funcionalidades de nuestra plataforma. Incluye características exclusivas, soporte prioritario y acceso a contenido premium adicional.",
    includes: {
        subtitle: "Que incluye",
        benefits: [
            "Consultas ilimitadas",
            "Dashboard personalizado",
            "Predicción de ventas",
            "Soporte online",
            "Soporte telefónico 24/7",
        ]
    },
    payment: "Suscripción Mensual",
    value: "€89",
    cents: "<sup>99</sup>",
    currency: "EUR",
    invoices: "Facturas y recibos disponibles para facilitar el reembolso de la empresa"
},
];


export { aboutUs, people, team, services };