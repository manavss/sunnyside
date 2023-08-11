function GridPage() {
  return (
    <div>
      <div className="md:flex ">
        <div className="order-1 h-[50svh] bg-mobile-transform bg-cover bg-center bg-no-repeat md:order-2 md:h-[75vh] md:w-[50%] md:bg-desktop-transform"></div>
        <div className="order-2 flex  flex-col items-center justify-center space-y-10 px-8 py-16 text-center  md:order-1  md:w-[50%]">
          <h1 className=" font-Fraunces text-4xl md:text-5xl ">
            Transform your brand
          </h1>
          <p className=" font-Barlow text-lg text-grayishBlue md:text-xl ">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <h2 className=" font-Fraunces text-lg font-bold uppercase hover:cursor-pointer md:text-xl">
            Learn more
            <hr className=" m-auto mt-[-10px]  h-2 w-[130px]  rounded-md bg-yellow  md:mt-[-15px] md:h-4" />
          </h2>
        </div>
      </div>
      <div className="md:flex">
        <div className="order-2 h-[50svh] bg-mobile-standOut bg-cover bg-center bg-no-repeat md:order-1 md:h-[75vh] md:w-[50%] md:bg-desktop-standOut"></div>
        <div className="order-1 flex  flex-col items-center justify-center space-y-10 px-8 py-16 text-center  md:order-2  md:w-[50%]">
          <h1 className=" font-Fraunces text-4xl md:text-5xl">
            Stand out to the right audience
          </h1>
          <p className=" font-Barlow text-lg text-grayishBlue md:text-xl">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <h2 className="font-Fraunces text-lg font-bold uppercase hover:cursor-pointer md:text-xl">
            Learn more
            <hr className=" m-auto mt-[-10px] h-2  w-[130px] rounded-md bg-softRed  md:mt-[-15px] md:h-4" />
          </h2>
        </div>
      </div>
      <div className="md:flex">
        <div className="relative h-[90svh] bg-mobile-graphicDesign bg-cover bg-top bg-no-repeat px-8  md:h-[75vh] md:w-[50%] md:bg-desktop-graphicDesign">
          <div className="absolute bottom-1 space-y-10 text-center text-cyanGraphicDesignText">
            <h1 className="font-Fraunces text-3xl font-bold">Graphic design</h1>
            <p className="pb-10 font-Barlow text-lg">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>

        <div className="relative h-[90svh] bg-mobile-photography bg-cover bg-top bg-no-repeat  md:h-[75vh] md:w-[50%] md:bg-desktop-photography">
          <div className="absolute bottom-1 space-y-10 px-8 text-center text-cyanGraphicDesignText ">
            <h1 className="font-Fraunces text-3xl font-bold"> Photography</h1>
            <p className="pb-10 font-Barlow text-lg">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridPage;

// Transform your brand

// We are a full-service creative agency specializing in helping brands grow fast.
// Engage your clients through compelling visuals that do most of the marketing for you.

// Learn more
