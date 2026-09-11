import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Carol M.",
    designation: "Buyer · Sun City Summerlin",
    content:
      "Dr. Duffy knew every recreation center, HOA quirk, and golf-course premium in 89134. We closed on a single-story home without surprises.",
    image: "/images/testimonials/auth-01.jpg",
    star: 5,
  },
  {
    id: 2,
    name: "Robert & Lynn T.",
    designation: "Sellers · Del Webb Summerlin",
    content:
      "Our listing was priced to the Sun City comps—not the Strip. We had multiple showings the first weekend and a strong offer.",
    image: "/images/testimonials/auth-02.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "Diane K.",
    designation: "Relocating from California",
    content:
      "From California tax questions to age verification and club access, Dr. Duffy made the 55+ move to Summerlin feel straightforward.",
    image: "/images/testimonials/auth-03.jpg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Sun City Summerlin Clients Say"
          paragraph="Hyper-local buyer and seller feedback from Las Vegas 55+ moves with Dr. Jan Duffy."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
