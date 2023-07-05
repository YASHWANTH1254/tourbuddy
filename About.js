import React from 'react';
import './about.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
        <header className="header" id="header">
      <Navbar />
    </header>
    <div className="about-container">
      <h1 className="about-title">Tourbuddy</h1>
      <h2 className="about-description">
         TourBuddy Tourism is your ultimate travel companion for exploring the enchanting Indian states. Our focus is on providing you with an unforgettable experience by showcasing the top five tourism places in each state. We guide you to nearby hotels, ensuring a convenient and comfortable stay during your journey. Indulge in the famous local cuisine, savoring the flavors that define each region. We also provide valuable insights into transportation options, making it easy for you to navigate your chosen destination.
      </h2>
      <h2 className='about-description'>
          With TourBuddy as your trusted companion, you can immerse yourself in the rich cultural heritage and natural beauty of India's diverse states. Get ready to embark on a memorable adventure filled with exploration, relaxation, and discovery. Let TourBuddy Tourism be your guide to unlocking the treasures of India, one state at a time.
      </h2>
    </div>
    </div>
  );
};

export default About;
