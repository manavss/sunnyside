import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
function Navbar({ setShowMenu, showMenu }) {
  return (
    <nav
      role="navigation"
      className="font-Barlow text-darkGrayishBlue w-full relative flex justify-between items-center pt-5 px-5 bg-skyBlue"
    >
      {/* Mobile Nav */}
      <div>
        <img src={logo} alt="" />
      </div>

      <button
        className="md:hidden"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <img src={hamburger} alt="" />
      </button>

      <div className="hidden md:flex md:justify-center items-center md:gap-x-14 text-white font-thin">
        <a>About</a>
        <a>Services</a>
        <a>Projects</a>
        <a className=" font-Fraunces uppercase text-black bg-white px-6 py-3 rounded-full hover:bg-sky-300 hover:text-white">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
