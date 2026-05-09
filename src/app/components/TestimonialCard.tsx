import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div>
      <div>
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i}>
            <Star />
          </span>
        ))}
      </div>
      <p>{testimonial.text}</p>
      <p>{testimonial.name}</p>
    </div>
  );
}
