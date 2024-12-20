import React, { useState } from 'react';
import mutton from '../Food/Images/mutton.png';
import fish from '../Food/Images/fish.jpg';
import Chicken from '../Food/Images/chicken.avif';
import Footer from '../Footer/Footer';
import FoodModal1 from './FoodDescription/MuttonItems';
import ChickenItems from './FoodDescription/ChickenItems';

export default function Food() {
  // Define the states for modal visibility, video URL, and selected food
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(''); // Track selected food type

  // Handle opening the modal with the appropriate food type
  const handleModalOpen = (foodType) => {
    setSelectedFood(foodType); // Set the selected food
    setIsModalOpen(true); // Open the modal
  };

  // Handle closing the modal
  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedFood(''); // Reset selected food state
  };

  return (
    <div>
      {/* Grid 1 */}
      <div className="container text-center my-5">
        <div className="row">
          <div className="col border p-3 text-center">
            <img
              src={mutton}
              alt="Mutton items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('mutton')}
            />
            <p><strong>Mutton Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={fish}
              alt="Fish Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('fish')}
            />
            <p style={{ marginTop: '10px' }}><strong>Fish Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={Chicken}
              alt="Chicken Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('chicken')}
            />
            <p><strong>Chicken Items</strong></p>
          </div>
        </div>
      </div>

      {/* Conditional Rendering of Modals */}
      {selectedFood === 'mutton' && (
        <FoodModal1 isOpen={isModalOpen} onClose={handleModalClose} />
      )}
      {selectedFood === 'chicken' && (
        <ChickenItems isOpen={isModalOpen} onClose={handleModalClose} />
      )}
      {/* Add more conditionals for other modals if needed */}

      <Footer />
    </div>
  );
}
