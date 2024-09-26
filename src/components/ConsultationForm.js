// src/components/ConsultationForm.js
import React from 'react';

const ConsultationForm = () => {
  return (
    <div className="consultation-form" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)' }}>
      <h3 className="form-title">Book Free Consultation</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="patientName" className="form-label">Patient Name</label>
          <input type="text" className="form-control" id="patientName" placeholder="Enter Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
          <input type="text" className="form-control" id="mobileNumber" placeholder="Enter Mobile Number" />
        </div>
        <div className="mb-3">
          <label htmlFor="selectCity" className="form-label">Select City</label>
          <select className="form-select" id="selectCity">
            <option>Udhampur</option>
            <option>Patnitop</option>
            <option>Kathua</option>
            <option>Gurdaspur</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="selectDisease" className="form-label">Select Disease</label>
          <select className="form-select" id="selectDisease">
            <option>Disease 1</option>
            <option>Disease 2</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">Book Now</button>
      </form>
    </div>
  );
};

export default ConsultationForm;
