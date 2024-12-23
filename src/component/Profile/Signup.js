import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
    terms: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost/Eatopia-Service/Signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();


    if (data.status === "success") {
      window.alert("Signup successful!");
      navigate("/home", { state: { message: "Signup successful!" } });
      
    } else {
      window.alert("Signup failed! " + data.message);
      console.error(data.message);
    }



  };


  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="text-center mb-4">Signup</h2>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Username */}
            <div className="col-md-6">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            {/* Full Name */}
            <div className="col-md-6">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Date of Birth */}
            <div className="col-md-6">
              <label htmlFor="dob" className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            {/* Gender */}
            <div className="col-md-6">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select
                id="gender"
                name="gender"
                className="form-select"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Choose Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
            </div>

            {/* Address */}
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            {/* City */}
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            {/* State */}
            <div className="col-md-6">
              <label htmlFor="state" className="form-label">State</label>
              <select
                id="state"
                name="state"
                className="form-select"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Choose State</option>
                <option value="Andhra Pradesh">Andhra Pradesh </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam </option>
                <option value="Bihar">Bihar </option>
                <option value="Chhattisgarh">Chhattisgarh </option>
                <option value="Goa">Goa </option>
                <option value="Gujarat">Gujarat </option>
                <option value="Haryana">Haryana </option>
                <option value="Himachal Pradesh">Himachal Pradesh </option>
                <option value="Jharkhand">Jharkhand </option>
                <option value="Karnataka">Karnataka </option>
                <option value="Kerala">Kerala </option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra </option>
                <option value="Manipur">Manipur </option>
                <option value="Meghalaya">Meghalaya </option>
                <option value="Mizoram">Mizoram </option>
                <option value="Nagaland">Nagaland </option>
                <option value="Odisha">Odisha </option>
                <option value="Punjab">Punjab </option>
                <option value="Rajasthan">Rajasthan </option>
                <option value="Sikkim">Sikkim </option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttarakhand">Uttarakhand </option>
                <option value="Uttar Pradesh">Uttar Pradesh </option>
                <option value="West Bengal">West Bengal </option>
              </select>
            </div>

            {/* Zipcode */}
            <div className="col-md-6">
              <label htmlFor="zipcode" className="form-label">Zip Code</label>
              <input
                type="text"
                className="form-control"
                id="zipcode"
                name="zipcode"
                placeholder="Enter zip code"
                value={formData.zipcode}
                onChange={handleChange}
              />
            </div>

            {/* Country */}
            <div className="col-md-6">
              <label htmlFor="country" className="form-label">Country</label>
              <select
                id="country"
                name="country"
                className="form-select"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Choose Country</option>
                <option value="India">India</option>
                </select>
            </div>

            {/* Phone Number */}
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Terms & Conditions */}
            <div className="col-12">
              <div className="form-check">
                {/* <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                /> */}
                {/* <label className="form-check-label" htmlFor="gridCheck">
                  I agree to the terms and conditions
                </label> */}
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
