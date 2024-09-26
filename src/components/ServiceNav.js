import React from 'react';

const ServiceNav = () => {
  return (
    <div className="service-nav" style={{ backgroundColor: '#F8F9FA', padding: '10px 0' }}>
      <div className="container">
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="#">Proctology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Laparoscopy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gynaecology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ENT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Urology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Vascular</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Aesthetics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Orthopedics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ophthalmology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Fertility</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Weight Loss</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Wellness</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ServiceNav;
