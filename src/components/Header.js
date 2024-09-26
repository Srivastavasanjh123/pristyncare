import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#002D62' }}>
      <div className="container">
        {/* Replace Pristyn Care logo with ln.jpeg */}
        <a className="navbar-brand" href="#">
          <img 
            src="/lh.jpeg"  // Correct path to the image in the public folder
            alt="Healthcare Logo"
            //style={{ width: '80px', height: '40px', objectFit: 'contain' }}  // Adjust height if needed
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="#"><FaMapMarkerAlt /> Delhi</a>
            </li>
            <li className="nav-item">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search disease, doctors, treatments..." aria-label="Search" />
                <button className="btn btn-outline-light" type="submit"><FaSearch /></button>
              </form>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">For Patients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Our Company</a>
            </li>
            <li>
          <button className="book-appointment">Book Free Appointment</button>
        </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#"><FaGlobe /> English</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Select</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
