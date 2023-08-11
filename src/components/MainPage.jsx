import iconArrow from "../assets/images/icon-arrow-down.svg";

function MainPage({ showMenu }) {
  return (
    <div className="relative h-[80svh] md:h-[92svh] flex flex-col justify-center text-center items-center w-full bg-mobile-header  md:bg-desktop-header bg-cover  md:bg-center bg-no-repeat">
      <h1 className="text-5xl absolute top-[130px] tracking-wide pb-10  md:text-6xl uppercase text-white font-Fraunces">
        We are creatives
      </h1>
      <img className=" w-10 pt-20 md:pt-0" src={iconArrow} alt="" />
      {showMenu && (
        <div className="absolute md:hidden top-20 gap-y-9  py-9 shadow-md w-[90%] justify-center items-center flex flex-col bg-white">
          <a>About</a>
          <a>Services</a>
          <a>Projects</a>
          <a className=" font-Fraunces uppercase text-black bg-yellow px-6 py-3 rounded-full">
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default MainPage;
