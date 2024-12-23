import React, { useState } from 'react';
import './UsersStyle.css'

export default function Users() {
  // Optionally, manage form state with React's useState hook
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
    hometown: '',
    phoneNumber: '',
    checked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address field */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Hometown field */}
        <div className="mb-3">
          <label htmlFor="hometown" className="form-label">Hometown</label>
          <input
            type="text"
            className="form-control"
            id="hometown"
            name="hometown"
            value={formData.hometown}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number field */}
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email field */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        {/* Password field */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Checkbox */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name="checked"
            checked={formData.checked}
            onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
  
          {/* Submit button */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
      
