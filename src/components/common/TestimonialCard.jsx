import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">"{testimonial.text}"</p>
      <div className="testimonial-author">
        <img src={testimonial.avatar} alt={testimonial.name} />
        <div>
          <h4>{testimonial.name}</h4>
          <p>{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;


