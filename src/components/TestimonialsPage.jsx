import emily from "../assets/images/image-emily.jpg";
import thomas from "../assets/images/image-thomas.jpg";
import jennie from "../assets/images/image-jennie.jpg";
import Testimonial from "./Testimonial";
const data = [
  {
    image: emily,
    para: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    post: " Marketing Director",
  },

  {
    image: thomas,
    para: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    post: "Chief Operating Officer",
  },
  {
    image: jennie,
    para: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: " Jennie F.",
    post: "Business Owner",
  },
];
function TestimonialsPage() {
  return (
    <>
      <h1 className="pt-10 text-center font-Fraunces text-3xl font-bold text-grayishBlue md:pt-20">
        Client Testimonials
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row md:p-32">
        {data.map((p, i) => {
          return (
            <Testimonial
              key={i}
              image={p.image}
              post={p.post}
              para={p.para}
              name={p.name}
            />
          );
        })}
      </div>
    </>
  );
}

export default TestimonialsPage;
