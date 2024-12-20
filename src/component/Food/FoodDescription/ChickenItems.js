import React from 'react';
import chickenDescp from '../Images/ChickenDescription.mp4';

function ChickenItems ({ isOpen, onClose, videoUrl }) {
    if (!isOpen) return null;
  

    return (
        <div>
            <div
                className="modal d-flex justify-content-center align-items-center"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
                    zIndex: 1050,
                    display: "flex",
                    justifyContent: "center",  // Horizontally center
                    alignItems: "center",      // Vertically center
                }}
            >
                <div
                    className="modal-content"
                    style={{
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        padding: "10px",
                        textAlign: "center",
                        width: "800px", // Adjusted width
                        maxWidth: "90%",
                        maxHeight: "80%", // Ensures modal height is responsive
                        overflowY: "auto", // To make sure content doesn't overflow
                    }}
                >
                    <video
                        src={chickenDescp}
                        style={{ width: "100%", borderRadius: "10px" }}
                        autoPlay
                        loop
                        muted
                    >
                        Your browser does not support the video tag.
                    </video>

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
        </div>
    );
}
export default ChickenItems;
