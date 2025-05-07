import React from 'react';
import './OurStore.scss';
import Noidastore from '../../assets/kaira-noida.jpeg';
import gurgaonStore from '../../assets/ks-gurgaon.jpeg';
import CityPlaza from '../../assets/city-plaza.jpeg';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const OurStore = () => {
  return (
    <div className="our-store">
      {/* Section 1: Office Details */}
      <section className="office-section">
        <div className="container">
          <h2 className="section-title">Our Office</h2>
          <div className="office-details">
            <h3>Our Registered Office</h3>
            <h4>KS KAIRA JEWELLERS PVT LTD</h4>
            <address>
              <FaMapMarkerAlt className="icon" />
              Shop No.1 Huda Market, Sector 23, Gurugram,
              <br />
              Haryana, India
            </address>
            <div className="phone-numbers">
              <FaPhone className="icon" />
              <span>01244052774, 7835849458</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Gurgaon Store */}
      <section className="store-location">
        <div className="container">
          <h2 className="section-title">Our Gurugram Store</h2>
          <div className="location-grid">
            <div className="store-image">
              <img 
                src={gurgaonStore} 
                alt="KAIRA SOLITAIRE DIAMOND JEWELLERS Gurugram Store" 
                className="store-photo"
              />
              <div className="store-name-overlay">
               
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.9676876560175!2d77.04620797523673!3d28.510619875731503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1986911120d9%3A0xc11c6c42f8e8fa37!2sKS%20Diamond%20Jewellers%20(KS%20Kaira%20Jewellers)!5e0!3m2!1sen!2sin!4v1746513958390!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gurugram Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Noida Store */}
      <section className="store-location alt-bg">
        <div className="container">
          <h2 className="section-title">Our Greater Noida Store</h2>
          <div className="location-grid reverse">
            <div className="store-image">
              <img 
                src={Noidastore} 
                alt="KAIRA SOLITAIRE DIAMOND JEWELLERS Noida Store" 
                className="store-photo"
              />
              <div className="store-name-overlay">
                
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.6208596262695!2d77.4274520279094!3d28.61526964871776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef003311fbab%3A0x85d91bd7036c15b6!2sKaira%20Jewellers!5e0!3m2!1sen!2sin!4v1746515743563!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Noida Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>


      {/* Section 4: City Plaza Store */}
      <section className="store-location alt-bg">
      <div className="container">
      <h2 className="section-title">Our City Plaza Store</h2>
       <div className="location-grid">
        <div className="store-image">
        <img 
          src={CityPlaza} 
          alt="KAIRA SOLITAIRE DIAMOND JEWELLERS City Plaza Store" 
          className="store-photo"
        />
        <div className="store-name-overlay">
          
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4844447823366!2d77.42525987524084!3d28.615239475674144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef003311fbab%3A0x85d91bd7036c15b6!2sKaira%20Jewellers!5e0!3m2!1sen!2sin!4v1746598630702!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="City Plaza Store Location"
        ></iframe>
      </div>
    </div>
  </div>
</section>
 </div>
  );
};

export default OurStore;



      
     