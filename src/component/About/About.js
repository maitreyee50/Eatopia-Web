import React from 'react';

export default function About({ toggleModal }) {
  return (
    <div>
      {/* Modal Structure */}
      <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-modal="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark ">
              <h5 className="modal-title text-white">About Eatopia</h5>
              <button type="button" className="btn-close btn-close-white" onClick={toggleModal} aria-label="Close"></button> {/* Close button */}
            </div>
            <div className="modal-body">
              <p>Eatopia is a vibrant new restaurant, established in 2024, where passion meets flavor.
                 We offer a unique dining experience with a menu that blends traditional favorites and innovative dishes, 
                 all made with the freshest, locally sourced ingredients. Our mission is to create a warm and welcoming 
                 atmosphere where food lovers can indulge in delicious, high-quality meals. Whether you're craving a hearty 
                 meal or something light and fresh, Eatopia has something to satisfy every palate. We take pride in offering 
                 an exceptional dining experience that combines great food, excellent service, and a cozy ambiance.
                  Come visit us at Eatopia, where every meal is a celebration of taste, creativity, and love for good food!</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
