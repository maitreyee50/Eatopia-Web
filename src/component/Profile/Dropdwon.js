import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileDropdown({ toggleLoginModal }) {
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
      <a href="javascript:void(0)" role="button" onClick={toggleDropdown}>
        <i className="bi bi-person-circle fs-1 me-3"></i>
      </a>
      {isDropdownOpen && (
        <div
          className="dropdown-menu show position-absolute"
          style={{ top: "100%", right: "0", zIndex: "1000" }}
        >
          <a className="dropdown-item" role="button" onClick={toggleLoginModal}>
            Login&nbsp;
            <i class="bi bi-box-arrow-in-left"></i>
          </a>
          <Link className="dropdown-item" to="/profile">
            Profile&nbsp;<i class="bi bi-people"></i>
          </Link>
          <Link className="dropdown-item" to="/settings">
            Settings&nbsp;<i class="bi bi-gear-wide-connected"></i>
          </Link>
          <Link className="dropdown-item" to="/logout">
            Logout&nbsp;<i class="bi bi-box-arrow-right"></i>
          </Link>
        </div>
      )}
    </div>
  );
}
