import React, { useState } from "react";


const Contact = () => {

    const [formData, setFormData] = useState({
        mobileNumber: '',
        name: '',
        email: '',
        address: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation here
        console.log('Form submitted:', formData);
      };
  return (
    <div className="container  shadow Contact">
      <h1 className="text-center">Contact Us</h1>
      <div className="row ">
        <div className="col-lg-6 shadow ">
          <iframe
            title="Google Map"
            width="550"
            height="380"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4638469728516!2d72.82847337336895!3d19.087296651621386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a2f9af6e97%3A0x416fa98490ee02a5!2sSNDT%20Women%27s%20University!5e0!3m2!1sen!2sin!4v1708670479101!5m2!1sen!2sin"
            allowFullScreen
          />
        </div>
        <div className="col-lg-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            placeholder="Enter Your Phone Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
