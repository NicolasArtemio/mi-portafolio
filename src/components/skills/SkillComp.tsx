export const SkillsComp = () => {



    return (
      <section id="skills">
        <div className="py-16">
          <h2 className="text-4xl text-pink-500 font-bold uppercase text-center">Habilidades</h2>
  
          <section className="py-6 flex flex-col items-center">
            <div className="flex flex-col gap-5 md:gap-0 md:flex-row space-x-8 px-4 md:px-20">
  
              <div className="flex items-center">
                <img src="./assets/icon1.webp" alt="Desarrollo Frontend" className="h-20" />
                <div className="ml-2 mt-5 md:mt-0">
                  <h2 className="roboto-bold">Desarrollo Frontend</h2>
                  <p className="roboto-regular text-sm">
                    Especializado en React.js y Tailwind CSS para crear interfaces modernas, accesibles y optimizadas para múltiples dispositivos.
                  </p>
                </div>
              </div>
  
              <div className="flex items-center">
                <img src="./assets/icon3.webp" alt="Desarrollo Backend" className="h-20" />
                <div className="ml-2">
                  <h2 className="roboto-bold">Desarrollo Backend</h2>
                  <p className="roboto-regular text-sm">
                    Experiencia en Node.js y bases de datos como MongoDB y MySQL para implementar soluciones robustas y escalables.
                  </p>
                </div>
              </div>
  
              <div className="flex items-center">
                <img src="./assets/icon2.webp" alt="Colaboración y Trabajo en Equipo" className="h-20" />
                <div className="ml-2">
                  <h2 className="roboto-bold">Colaboración y Trabajo en Equipo</h2>
                  <p className="roboto-regular text-sm">
                    Habilidad para trabajar en equipos colaborativos, adaptándome a metodologías ágiles y contribuyendo al crecimiento del proyecto
                  </p>
                </div>
              </div>
  
            </div>
          </section>
        </div>
      </section>
  
  
    )
  }
  
  export default SkillsComp;