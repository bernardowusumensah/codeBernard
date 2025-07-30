import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, StartupCorp',
      image: '👩‍💼',
      testimonial: 'codeBernard transformed our business operations completely. Their innovative solutions helped us scale from 10 to 100 employees in just one year. Outstanding service and support!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateTech',
      image: '👨‍💻',
      testimonial: 'The team at codeBernard delivered exactly what we needed. Their mobile app development exceeded our expectations and our user engagement increased by 300%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, GlobalSolutions',
      image: '👩‍🚀',
      testimonial: 'Working with codeBernard was a game-changer. Their cloud solutions reduced our infrastructure costs by 40% while improving performance. Highly recommended!',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Founder, EcoTech',
      image: '👨‍🔬',
      testimonial: 'codeBernard\'s consulting services helped us identify key areas for improvement. Their strategic guidance was invaluable in our digital transformation journey.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'VP of Operations, RetailPlus',
      image: '👩‍💼',
      testimonial: 'The real-time analytics dashboard codeBernard built for us provides incredible insights. We can now make data-driven decisions faster than ever before.',
      rating: 5
    },
    {
      name: 'James Miller',
      role: 'IT Manager, FinanceFirst',
      image: '👨‍💼',
      testimonial: 'Security was our top concern, and codeBernard delivered enterprise-grade solutions that gave us complete peace of mind. Their 24/7 support is exceptional.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-content">
        <h2>What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Don't just take our word for it - hear from some of our satisfied clients
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-avatar">{testimonial.image}</div>
                <div className="client-info">
                  <h4>{testimonial.name}</h4>
                  <p className="client-role">{testimonial.role}</p>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <blockquote className="testimonial-text">
                "{testimonial.testimonial}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
