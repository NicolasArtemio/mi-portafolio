import MobMenu from "./MobMenu";
import { useState } from "react";
import DropDown from "./DropDown";

export type LinkItem = {
  name: string;
  path?: string;
  id: string;
};
export const links: LinkItem[] = [
  {
    name: "Inicio",
    path: "/",
    id: "home"
  },
  {
    name: "Habilidades",
    id: "skills"
  },
  {
    name: "Proyectos",
    id: "projects"
  },

  {
    name: "Contacto",
    id: "contact"
  }
]

const NavBar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <section className="relative py-[2rem] px-8 lg:px-0 text-white">
      <div className="absolute inset-0 bg-gray-900 blur-md z-[-1]" />

      <div className="flex justify-between items-center px-8 lg:px-64 fixed bg-gradient-to-r from-pink-500 to-rose-900 py-[1rem] top-0 left-0 right-0 z-10 shadow-lg">
        <div className="opacity-85 text-[1.4rem] poppins-bold">{`</Ndev>`}</div>

        <MobMenu openMenu={showMenu} />

        <nav className="hidden lg:flex">
          <ul className="flex gap-5 mt-1 uppercase opacity-85 poppins-regular">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`transition-opacity duration-300 hover:opacity-75 ${link.id === 'home'
                    ? 'hover:opacity-100 text-pink-300'
                    : 'text-gray-300'
                    }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {openMenu && <DropDown openMenu={showMenu} />}
      </div>
    </section>
  )
}

export default NavBar;