const AboutSection = () => {
    return (
      <section id="home" className="relative">
        <div className="relative w-full h-[42rem]">
          <img
            src="./assets/background.webp"
            alt="Background"
            className="w-full h-[42rem] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
  
        <div className="absolute inset-0 flex flex-col mt-32 text-white">
          <h2 className="text-4xl poppins-bold text-center">Nicolás Artemio Dume</h2>
          <p className="text-xl poppins-regular mt-2 text-center opacity-90">FullStack Developer</p>
          <p className="poppins-regular text-center md:text-start px-2  max-w-[1280px] my-4 mx-auto ">Estoy buscando nuevas oportunidades para formar parte de un equipo de desarrollo. Con 2 años de experiencia en React.js y Node.js, me especializo en la creación de interfaces optimizadas y accesibles utilizando tecnologías modernas como TypeScript y Tailwind CSS. Mi enfoque está en brindar experiencias de usuario fluidas y atractivas, siempre orientadas a la funcionalidad y la calidad.</p>
  
          <div className="py-1 gap-1 md:gap-4 flex justify-center">
            <a href="#skills">
              <button className="poppins-bold px-4 py-2 text-sm md:text-lg bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
                Habilidades
              </button>
            </a>
            <a href="#projects">
              <button className="poppins-bold px-4 py-2 text-sm md:text-lg bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
                Proyectos
              </button>
            </a>
            <a href="#contact">
              <button className="poppins-bold px-4 py-2 text-sm md:text-lg bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors">
                Contacto
              </button>
            </a>
          </div>
        </div>
  
  
      </section>
  
    );
  }
  export default AboutSection;