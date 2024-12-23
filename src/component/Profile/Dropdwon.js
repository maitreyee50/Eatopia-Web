import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

export default function ProfileDropdown({ toggleLoginModal }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch username from localStorage
  const username = localStorage.getItem("username");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("username"); // Remove username on logout
    alert("Successfully logged out!");
    setIsDropdownOpen(false); // Close dropdown on logout
  };

  const handleLoginClick = () => {
    toggleLoginModal(); // Trigger login modal
    setIsDropdownOpen(false); // Close dropdown after login click
  };

  const handleSignupClick = () => {
    setIsDropdownOpen(false); // Close dropdown after signup click
  };

  return (
    <div className="dropdown-container position-relative">
      <a href="javascript:void(0)" role="button" onClick={toggleDropdown}>
        <i className="bi bi-person-circle fs-1 me-3"></i>
        {username && <span className="ms-2">Welcome, {username}</span>} {/* Display username if logged in */}
      </a>
      {isDropdownOpen && (
        <div
          className="dropdown-menu show position-absolute"
          style={{ top: "100%", right: "0", zIndex: "1000" }}
        >
          {!username ? (
            <a className="dropdown-item" role="button" onClick={handleLoginClick}>
              Login&nbsp;
              <i className="bi bi-box-arrow-in-left"></i>
            </a>
          ) : (
            <Link className="dropdown-item" to="/settings">
              Settings&nbsp;<i className="bi bi-gear-wide-connected"></i>
            </Link>
          )}
          {/* Use React Router Link to navigate to the signup page */}
          <Link className="dropdown-item" to="/signup" onClick={handleSignupClick}>
            Signup&nbsp;
            <i className="bi bi-person-fill-add"></i>
          </Link>
          {username && (
            <Link className="dropdown-item" to="/logout" onClick={handleLogout}>
              Logout&nbsp;<i className="bi bi-box-arrow-right"></i>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
