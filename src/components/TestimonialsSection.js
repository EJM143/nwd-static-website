import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Jane Smith",
    role: "Software Developer",
    company: "TechCorp",
    rating: 5,
    quote: "Next Wave Dev helped me build real industry skills."
  },
  {
    name: "Mark Lee",
    role: "Hiring Manager",
    company: "Startup Labs",
    rating: 5,
    quote: "Great developers with strong practical experience."
  }
];

export default function TestimonialsSection() {
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