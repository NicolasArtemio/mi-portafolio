import { GiHamburgerMenu } from "react-icons/gi";

export interface Props {
  openMenu: () => void;
}



const MobMenu = ({ openMenu }: Props) => {
  return (
    <nav className="relative lg:hidden  z-50">
      <button
        aria-label="menuburguer"
        onClick={openMenu}
        className="z-50"
      >
        <GiHamburgerMenu className="text-2xl opacity-85" />
      </button>


    </nav>
  );
};

export default MobMenu;