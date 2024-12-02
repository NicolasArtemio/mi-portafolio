import { links } from "./NavBar";
import { Props } from "./MobMenu";
import { FaRegWindowClose } from "react-icons/fa";

const DropDown = ({ openMenu }: Props) => {
  return (
    <div className="h-screen w-[280px] fixed top-0 right-0 bg-gradient-to-b from-pink-500 to-rose-900 lg:hidden flex z-50 animate-slideInRight">
      <div className="p-4 rounded-md bg-gray-800 bg-opacity-90 shadow-lg">
        <button
          aria-label="menuburguer"
          onClick={openMenu}
          className="absolute top-0 right-7 z-10"
        >
          <FaRegWindowClose className="text-3xl mt-4 text-white" />
        </button>

        <ul className="mt-20">
          {links.map((link) => (
            <li
              key={link.id}
              className="py-3 mb-4 border-b border-pink-300 uppercase"
            >
              <a
                href={`#${link.id}`}
                className="block text-white transition-colors duration-200 hover:text-pink-300"
                onClick={openMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;