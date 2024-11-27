import React from 'react';
import './Section_4.css'; 

const Section_4 = () => {
  const services = [
    {
      id: 1,
      title: 'Graphic Design',
      description: 'Monotonectally synergize grants to business visualize strategic infomediaries.',
      image: 'https://www.zidio.in/assets/images/home-2/service-1.png',
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      description: 'Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.',
      image: 'https://www.zidio.in/assets/images/home-2/service-2.png',
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Design and build responsive, high-performance websites using the latest web technologies.',
      image: 'https://www.zidio.in/assets/images/home-2/service-3.png',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Boost your online presence with tailored digital marketing strategies that drive engagement and growth.',
      image: 'https://www.zidio.in/assets/images/home-2/service-4.png',
    },
    {
      id: 5,
      title: '3D Vector Illustration',
      description: 'Monotonectally synergize grants to business visualize strategic infomediaries.',
      image: 'https://www.zidio.in/assets/images/home-2/service-5.png',
    },
    {
      id: 6,
      title: 'Hosting Services',
      description: 'Monotonectally synergize grants to business visualize strategic infomediaries.',
      image: 'https://www.zidio.in/assets/images/home-2/service-6.png',
    },
  ];

  return (
    <section className="offerings-section">
      <header className="offerings-header">
        <h3>IT Support For Business</h3>
        <h1>What We Are Offering</h1>
      </header>

      <div className="offerings-grid">
        {services.map((service) => (
          <div className="offering-card" key={service.id}>
            <div className="offering-image-wrapper">
              <img src={service.image} alt={service.title} className="offering-image" />
              <h1 className="offering-number">{`0${service.id}`}</h1>
            </div>
            <div className="offering-details">
              <h2 className="offering-title">{service.title}</h2>
              <p className="offering-description">{service.description}</p>
              <h4>
                <a href="#" className="offering-link">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section_4;
