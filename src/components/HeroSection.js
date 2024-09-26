import React from 'react';
import ConsultationForm from './ConsultationForm';

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundColor: '#E8F4FC', padding: '50px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#2B63C0', lineHeight: '1.2' }}>Surgery Matlab<br />Pristyn Care</h1>
            <div className="hero-details d-flex mt-4" style={{ fontSize: '20px' }}>
              <p className="me-3"><strong>400+</strong> Doctors</p>
              <span className="vr"></span>
              <p className="mx-3"><strong>50+</strong> Diseases</p>
              <span className="vr"></span>
              <p className="ms-3"><strong>45+</strong> Cities</p>
            </div>
            <a href="tel:8527488190" className="btn btn-primary btn-lg mt-3">Call Us: 8527-488-190</a>
            <div className="mt-4">
              <p>Book Appointments With Our Expert Doctors Near You</p>
              <ul>
                <li>Get consultation for 50+ diseases across India</li>
                <li>In-person and online consultation with experienced doctors</li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
