import { Star } from 'lucide-react';
import type { Testimonial } from '../data/testimonials';

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="testimonial">
      <div className="stars" aria-label={`${testimonial.rating} étoiles sur 5`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={15} fill="#d4af37" stroke="#d4af37" />
        ))}
      </div>
      <p>« {testimonial.text} »</p>
      <span className="author">— {testimonial.name}</span>
    </div>
  );
}