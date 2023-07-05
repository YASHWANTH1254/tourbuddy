import React from 'react';
import vdeo from '../media/bgvd4.mp4';
import './welcome.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Test from './Test';
// import tour from '../media/logov.mp4'

const Homepage = () => {

  return (
    <div>
      
             

      <div className="video-container">
       <video src={vdeo} autoPlay loop muted />
       <div className='bar'>
       <Navbar showSearchBar={false} />
       </div>
       
        <div className="video-text">
        {/* <img src={tour}/> */}
        {/* <div>
        <video src={tour} autoPlay loop muted />
        </div> */}
          
          <h1>Welcome to <span>TourBuddy</span></h1>
          <p>Explore The India, Just One Click!</p>
          <Link to='/states'><button className='button'>Get Started</button></Link>
        </div>
      </div>
      <section className="section tour container">
        <h3 className="section-title">Popular Places</h3>
        <div className="tour__container">
        <div className="tour__card">
            <img src='/images/tajmahal2.jpg' alt="" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Taj Mahal</h5>
              <span className="tour__data-subtitle">Delhi</span>
            </div>
          </div>
          <div className="tour__card">
            <img src='images/hyd/hyderabad.jpg' alt="abc" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Charminar</h5>
              <span className="tour__data-subtitle">Hyderabad</span>
            </div>
          </div>
          <div class="tour__card">
            <img src='images/mumbai.jpg' alt="abc" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Gate Of India</h5>
              <span className="tour__data-subtitle">Mumbai</span>
            </div>
          </div>
        </div>
      </section>
      <h3 className="section-title">Must Visit Destinations</h3>
      <Test />
      <footer>
        <p className='text-center'>&copy; 2023 TourBuddy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
