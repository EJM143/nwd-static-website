import TestimonialCard from "./TestimonialCard";

const graduateTestimonials = [
  {
    name: "Jane Smith",
    role: "Software Developer",
    company: "",
    rating: 5,
    quote: "Next Wave Dev helped me build real industry skills."
  }
];

const companyTestimonials = [
  {
    name: "Mark Lee",
    role: "Hiring Manager",
    company: "Startup Labs",
    rating: 5,
    quote: "Great developers with strong practical experience."
  }
];

export default function TestimonialsSection({ type }) {

  let testimonials = [];

  if (type === "graduates") {
    testimonials = graduateTestimonials;
  } else if (type === "companies") {
    testimonials = companyTestimonials;
  } else {
    testimonials = [...graduateTestimonials, ...companyTestimonials];
  }

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
}