import React, { useEffect, useRef } from 'react';
import './AboutUs.scss';
import gunjanImage from '../../assets/gunjan-sharma.jpg';
import vikasImage from '../../assets/vikas-sharma.jpg';

const AboutUs = () => {
  // Refs for scroll animation
  const sectionRefs = {
    about: useRef(null),
    journey: useRef(null),
    craftsmanship: useRef(null),
    directors: useRef(null),
    commitment: useRef(null)
  };

  // Function to handle scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section refs
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>KAIRA JEWELLERS</h1>
          <p className="tagline">Experience luxury, craftsmanship, and authenticity with Kaira Jewellers.</p>
          <p className="tagline-highlight">YOUR ULTIMATE JEWELLERY DESTINATION !</p>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="section about-section fade-in">
        <div className="container">
          <h2 className="section-title">ABOUT KAIRA JEWELLERS</h2>
          <div className="content">
            <p>At KS Kaira Jewellers Pvt. Ltd., jewellery is not only an adornment but an expression of identity, elegance, and cultural legacy. Based in Palam Vihar, Gurgaon, we have earned a trusted name in the jewellery industry through our unwavering commitment to quality, craftsmanship, and customer satisfaction. Our journey began with a vision to seamlessly blend traditional artistry with modern aesthetics, crafting timeless pieces that speak to both heritage and individuality.</p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <div className="sections-wrapper">
        <section ref={sectionRefs.journey} className="section journey-section">
          <div className="container">
            <h2 className="section-title">OUR JOURNEY THROUGH TIME</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="year">2004</div>
                <div className="description">We have started our entrepreneur Journey in to 2004 from Wholesale business in Mumbai.</div>
              </div>
              <div className="timeline-item">
                <div className="year">2015</div>
                <div className="description">In 2015, Gunjan took a bold step by opening his own store, Kaira Jewellers. Although it was a risky venture, his dedication and skill led him to success.</div>
              </div>
              <div className="timeline-item">
                <div className="year">2017</div>
                <div className="description">We gained recognition in the market for our unique styles so we thought of expanding and opening the new store in Greater Noida.</div>
              </div>
              <div className="timeline-item">
                <div className="year">2025</div>
                <div className="description">Planning to create Pan India presence through Franchise stores.</div>
              </div>
            </div>
          </div>
        </section>

        <section ref={sectionRefs.directors} className="section directors-section">
          <div className="container">
            <h2 className="section-title">MEET OUR MANAGING DIRECTOR</h2>
            <div className="directors-grid">
              <div className="director-card">
                <img src={gunjanImage} alt="Mr. Gunjan Sharma" className="director-image" />
                <h3>Mr. Gunjan Sharma</h3>
              </div>
              <div className="director-card">
                <img src={vikasImage} alt="Mr. Vikas Sharma" className="director-image" />
                <h3>Mr. Vikas Sharma</h3>
              </div>
            </div>
            <div className="content">
              <p>With over 20 years of experience in the jewellery industry, Mr. Gunjan Sharma and Mr. Vikas Sharma stand as the dynamic forces behind the success of Kaira Jewellers. Their journey began in 2004, mastering the artistry of gold and gemstone jewelry. Driven by a relentless passion for excellence, they further honed their expertise in the diamond industry during his time in Surat.</p>
              <p>In 2015, Mr. Gunjan took the entrepreneurial leap by establishing Kaira Diamond Jewellers, a bold venture that quickly earned a reputation for quality and trust. In 2017, he partnered with his brother, Mr. Vikas Sharma, to launch Kaira Solitaire Diamond Jewellers, marking a turning point in the business expansion. With three successful showrooms across Gurugram and Greater Noida West, their vision continues to scale new heights.</p>
              <p className="highlight">The leaders defined by integrity, creativity & humility, their legacy is built on innovation, trust, and an enduring commitment to craftsmanship.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Guiding Principles */}
      <section className="section guiding-principles-section fade-in">
        <div className="container">
          <h2 className="section-title">GUIDING PRINCIPLES</h2>
          <div className="content">
            <p>Innovation is at the heart of everything we do. Our team continuously strives to introduce new and unique designs, keeping up with the latest trends while preserving the charm of traditional craftsmanship. From classic wedding jewellery to modern statement pieces, our collection caters to a wide range of styles and preferences. Whether you're looking for an everyday accessory or a grand piece for a special occasion, K S Kaira Jewellers Pvt Ltd ensures that you find something that truly resonates with your personality.</p>
            <p>Customer satisfaction is the foundation of our brand. We believe that jewellery shopping should be a memorable and enjoyable experience, which is why we offer personalized services to help customers find their perfect piece. Our expert team is always available to guide you through your purchase, ensuring that you make an informed choice based on your style, budget, and preferences.</p>
            <p>Beyond just selling jewellery, we believe in building relationships. Every piece we create is designed with love and passion, reflecting our commitment to excellence and trust. This is why our customers keep coming back to us, knowing that they are investing in authentic, high-quality jewellery that lasts a lifetime.</p>
            <p>With a legacy of trust, innovation, and elegance, K S Kaira Jewellers Pvt Ltd continues to redefine the jewellery shopping experience. Whether you're drawn to timeless traditional designs or modern minimalist pieces, we invite you to explore our collection and discover the beauty of fine jewellery.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;