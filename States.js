import React, { useState } from 'react';
import './state.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


  export const states = [
    { city: 'Andhra Pradesh', place: 'Tirupati', link: 'images/Andhra Pradesh.jpg' },
    { city: 'Arunachal Pradesh', place: 'Tawang', link: 'images/arunachalpradesh.jpg' },
    { city: 'Assam', place: 'Taiwan Tea Plant', link: 'images/assam1.jpg' },
    { city: 'Bihar', place: 'Mahabodi Temple', link: 'images/bihar.jpg' },
    { city: 'Chhattisgarh', place: 'Chitrakoot Falls', link: 'images/chattisghad.jpg' },
    { city: 'Goa', place: 'Chalangute Beach', link: 'images/goa.jpg' },
    { city: 'Gujarat', place: 'Rann Of Kutch', link: 'images/gujrath.jpg' },
    { city: 'Haryana', place: 'Gurgaon', link: 'images/haryana2.jpg' },
    { city: 'Himachal Pradesh', place: 'Shimla', link: 'images/Himachal Pradesh.jpg' },
    { city: 'Jammu And Kashmir', place: 'Sonmarg', link: 'images/jammukashmir.webp' },
    { city: 'Jharkhand', place: 'Dassam Falls', link: 'images/jharkand.jpg' },
    { city: 'Karnataka', place: 'Mysore Palace', link: 'images/karnataka1.jpg' },
    { city: 'Kerala', place: 'Alleppey', link: 'images/kerala1.jpg' },
    { city: 'Madhya Pradesh', place: 'Khajuraho Temple', link: 'images/madhyapradesh1.jpg' },
    { city: 'Maharashtra', place: 'Gate Of India', link: 'images/mumbai1.jpg' },
    { city: 'Manipur', place: 'Loktak Lake', link: 'images/manipur.jpg' },
    { city: 'Meghalaya', place: 'Shillong', link: 'images/meghalaya1.jpg' },
    { city: 'Mizoram', place: 'Aizwal', link: 'images/mizoram.jpg' },
    { city: 'Nagaland', place: 'Dzukou Valley', link: 'images/nagaland1.jpg' },
    { city: 'Odisha', place: 'Shri Jagannath Puri', link: '/images/odisha.jpg' },
    { city: 'Punjab', place: 'Amritsar Golden Temple', link: '/images/punjab1.jpg' },
    { city: 'Rajasthan', place: 'Jaipur', link: '/images/rajastan2.jpg' },
    { city: 'Sikkim', place: 'Tsomgo Lake', link: '/images/sikkim3.jpg' },
    { city: 'Tamil Nadu', place: 'Meenakshi Temple', link: 'images/tamilnaadu.jpg' },
    { city: 'Telangana', place: 'Charminar', link: 'images/hyd/hyderabad.jpg' },
    { city: 'Tripura', place: 'Neermahal Palace', link: 'images/tripura1.jpg' },
    { city: 'Uttar Pradesh', place: 'Taj Mahal', link: 'images/tajmahal3.jpg' },
    { city: 'Uttarakhand', place: 'Kedarnath', link: 'images/uttarkhand.jpg' },
    { city: 'West Bengal', place: 'Darjeeling', link: 'images/westbengal.jpg' },
    { city: 'Delhi', place: 'India Gate', link: 'images/india gate.jpg' },
    { city: 'Ladakh', place: 'Pangog Lake', link: 'images/pangoglake.jpg' },
    { city: 'Pondicherry', place: 'Paradise Beach', link: 'images/paradisebeach.jpg' },
    { city: 'ANDAMAN NICOBAR', place: 'Port Blair',link: 'images/port.jpg' },
    { city: 'Chandigarh', place: 'Iskcon Temple', link: 'images/ishkon.jpg' },
    { city: 'Daman and Diu', place: 'Diu Fort', link: 'images/diu.jpg' },
    { city: 'Lakshadweep', place: 'Minicoy Island', link: 'images/Minicoy Island.jpg' },
  ]

  const States = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredStates = states.filter(
      (state) =>
        state.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        state.place.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className='bg' style={{ paddingBottom:'30px'}}>
        <Navbar handleSearch={handleSearch} showSearchBar={true} />
        <h2 className='text-center'>
          <span style={{ color: 'orange' }}>States</span> <span style={{ color: 'white' }}>in</span>{' '}
          <span style={{ color: 'green' }}>India</span>
        </h2>
        <div className='container'>
          {filteredStates.length > 0 ? (
            <div className='row row-cols-1 row-cols-md-4 g-4 mt-2'>
              {filteredStates.map((state, index) => {
                const originalIndex = states.findIndex(
                  (s) => s.city === state.city && s.place === state.place
                );
                return (
                  <div key={originalIndex} className='col'>
                    <Link to={`/places/${originalIndex}`} className='text-decoration-none'>
                      <div className='card'>
                        <img src={state.link} className='card-img-top' alt='abc' />
                        <div className='card-img-overlay'>
                          <h5 className='card-title'>{state.place}</h5>
                          <p className='card-text'>{state.city}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <h2 className='txt'>No data found</h2>
          )}
        </div>
      </div>
    );
  };
  
  export default States;