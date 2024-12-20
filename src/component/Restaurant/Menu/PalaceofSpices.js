import React from 'react';
import PalaceMenu from '../restaurant Images/PalaceMenu.jpg';

export default function PalaceItems({ isOpen, onClose, image }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal d-flex justify-content-center align-items-start"
      style={{
        position: "fixed",
        top: "10px",  // Adjust the top position to add some space from the top
        left: 0,
        width: "100%",
        height: "100%",  // Allow the height to adjust based on content
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1050,
        justifyContent: "center", // Horizontally center the modal
        alignItems: "center", // Vertically center the modal
      }}
    >
      <div
        className="modal-content"
        style={{
          backgroundColor: "#fff",
          borderRadius: "2px",
          padding: "2px",
          width: "400px",
          maxWidth: "90%", // Ensures it doesn't overflow on small screens
          maxHeight: "80%", // Ensures modal height is responsive
        }}
      >
        <img
          src={PalaceMenu}
          alt="Modal Content"
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <button
          className="btn btn-danger mt-3"
          onClick={onClose}
          style={{
            display: "block",
            backgroundColor: "black",
            margin: "0 auto",
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
