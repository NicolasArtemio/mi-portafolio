const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white flex flex-col">
      <h2 className="text-center uppercase poppins-bold text-4xl text-pink-500 mb-12">
        Contacto
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="mt-4 p-6 max-w-md w-full flex flex-col items-center justify-center rounded-lg shadow-md bg-white border border-pink-200 hover:shadow-lg transition duration-200">
          <p className="text-gray-700 mb-4 text-center">
            Si tu empresa necesita un desarrollador motivado y orientado a resultados, no dudes en contactarme. Estoy listo para contribuir al crecimiento del equipo, aprender, y seguir perfeccionando mis habilidades en un entorno colaborativo. Puedes contactarme a través de los siguientes medios:
          </p>
          <a href="mailto:nicolasartemiodume@gmail.com">
            <button className="mt-4 w-full px-4 py-2 bg-pink-500 uppercase text-white rounded-lg hover:bg-pink-600 transition">
              Contactar
            </button>
          </a>
        </div>
        <div className="mt-4 p-6 max-w-md w-full flex flex-col items-center justify-center rounded-lg bg-white border border-pink-200 hover:shadow-lg transition duration-200">
          <p className="text-gray-700 mb-4 text-center">
            También puedes seguirme en mis redes sociales para estar al tanto de mis proyectos.
          </p>
          <div className="flex space-x-4 justify-center">
            <a href="https://www.linkedin.com/in/nicolas-artemio-dume-68aaa1339/" className="text-pink-500 hover:text-pink-700">
              LinkedIn
            </a>
            <a href="https://github.com/nicod12" className="text-pink-500 hover:text-pink-700">
              GitHub
            </a>
            <a href="https://www.youtube.com/@NonsenseDev" className="text-pink-500 hover:text-pink-700">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
