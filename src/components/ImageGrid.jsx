function ImageGrid() {
  return (
    <div className="grid h-[50vh]  grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
      <div className="  bg-mobile-milkBottles bg-cover bg-center bg-no-repeat"></div>
      <div className="  bg-mobile-orange bg-cover bg-center bg-no-repeat"></div>
      <div className=" bg-mobile-cone bg-cover bg-center bg-no-repeat"></div>
      <div className="  bg-mobile-sugarCubes bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
}

export default ImageGrid;
