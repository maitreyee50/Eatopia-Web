import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".dropdown-container")) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isDropdownOpen]);

  return (
    <div className="dropdown-container position-relative">
      <a href="javascript:void(0)" onClick={toggleDropdown}>
        <i className="bi bi-person-circle fs-1 me-3"></i>
      </a>
      {isDropdownOpen && (
        <div
          className="dropdown-menu show position-absolute"
          style={{ top: "100%", right: "0", zIndex: "1000" }}
        >
          <Link className="dropdown-item" to="/login">
            Login
          </Link>
          <Link className="dropdown-item" to="/profile">
            Profile
          </Link>
          <Link className="dropdown-item" to="/settings">
            Settings
          </Link>
          <Link className="dropdown-item" to="/logout">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}
