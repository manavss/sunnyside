function Testimonial({ image, para, name, post }) {
  return (
    <div className=" flex flex-col items-center justify-center gap-y-6  px-8 py-8 text-center">
      <img src={image} className=" h-20 w-20 rounded-full" alt="" />
      <p className="font-Barlow text-lg text-veryDarkGrayishBlue">{para}</p>
      <div>
        <h2 className="font-Fraunces text-lg font-bold ">{name}</h2>
        <h3 className=" font-Barlow text-base text-grayishBlue"> {post}</h3>
      </div>
    </div>
  );
}

export default Testimonial;
