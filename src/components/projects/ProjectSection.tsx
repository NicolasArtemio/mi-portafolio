

interface Values {
    id: number;
    title: string;
    description: string;
    url: string;
  }
  
  const Properties: Values[] = [
    {
      id: 1,
      title: "Barber-App",
      description: "Desarrollé una aplicación para una barbería con Next.js y Tailwind CSS, que ofrece una interfaz moderna y responsiva para explorar servicios y realizar reservas en línea, incluyendo un mapa de ubicación con Leaflet y un formulario de reservas validado con Zod y React Custom Form. Próximamente, implementaré un CMS utilizando MongoDB para gestionar el horario de disponibilidad y un validador de mensajes para mejorar la comunicación con los usuarios.",
      url: "https://barber-appt.netlify.app/"
    },
    {
      id: 2,
      title: "Supermercado-app",
      description: "Implementé una aplicación de demostración para un supermercado con un compañero de desarrollo, utilizando JavaScript y CSS, junto con Bootstrap para el diseño responsivo. La aplicación carga productos desde un archivo JSON y utiliza Local Storage para compartir los productos agregados al carrito entre sesiones de usuario.",
      url: "https://supermarketsa.netlify.app/"
    },
    {
      id: 3,
      title: "Marketing-App",
      description: "Implementé una página de aterrizaje para una agencia de marketing digital con un diseño inspirado en Pinterest. Diseñé y desarrollé la página utilizando React y Tailwind CSS, lo que me permitió crear un diseño responsivo y atractivo. Además, incorporé un custom hook para controlar animaciones de entrada, utilizando framer-motion y react-intersection-observer, lo que añade un nivel dinámico a la experiencia del usuario.",
      url: "https://dk-agencia.netlify.app/"
    },
  ];
  const ProjectSection = () => {
    return (
      <section id="projects" className="py-16 bg-gradient-to-r from-pink-500 to-rose-900">
        <h2 className="text-4xl text-white font-bold uppercase text-center mb-12">Proyectos</h2>
  
        <div className="flex flex-col md:flex-row px-4 space-y-8 md:space-y-0 md:space-x-8 justify-center items-center">
          {Properties.map((propertie) => (
            <div
              key={propertie.id}
              className="w-80 bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
  
  
              <h3 className="text-pink-500 text-xl font-bold text-center mb-2">{propertie.title}</h3>
  
              <p className="text-gray-600 text-center mb-6">
                {propertie.description}
              </p>
  
              <div className="flex justify-center">
                <a
                  href={propertie.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                >
                  Ver Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
  
  
    );
  };
  
  export default ProjectSection;
  