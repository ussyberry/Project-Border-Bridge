import React from 'react';

const PricingCard = ({ plan }) => {
  return (
    <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
      <h3>{plan.name}</h3>
      <div className="price-display">
        <span className="price">${plan.price}</span>
        <span className="period">/{plan.period}</span>
      </div>
      <p className="description">{plan.description}</p>
      <ul className="features-list">
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="btn btn-primary">{plan.cta}</button>
    </div>
  );
};

export default PricingCard;


