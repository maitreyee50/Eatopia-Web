import React, { useState } from 'react';
import mutton from '../Food/Images/mutton.png';
import fish from '../Food/Images/fish.jpg';
import Chicken from '../Food/Images/chicken.avif';
import roll from '../Food/Images/roll.jpg';
import momo from '../Food/Images/momos.avif';
import pizza from '../Food/Images/pizza.jpg';
import Bengal from '../Food/Images/Bengal.jpg';
import rice from '../Food/Images/rice.avif';
import Bengali from '../Food/Images/Bengali.jpg';
import English from '../Food/Images/English.jpg';
import Chinese from '../Food/Images/Chinese.webp';
import Japanese from '../Food/Images/Japanese.jpg';
import ice from '../Food/Images/ice.webp';
import cakes from '../Food/Images/cakes.jpg';
import sweets from '../Food/Images/sweets.jpeg';
import Mocktail from '../Food/Images/Mocktail.avif';
import Drinks from '../Food/Images/Drinks.jpg';
import Milkshake from '../Food/Images/Milkshake.jpg';
import Footer from '../Footer/Footer';
import FoodModal1 from './FoodDescription/MuttonItems';
import ChickenItems from './FoodDescription/ChickenItems';
import FishItems from './FoodDescription/FishItems';
import RollItems from './FoodDescription/RollItems';
import MomoItems from './FoodDescription/MomoItems';
import PizzaItems from './FoodDescription/PizzaItems';
import BengalItems from './FoodDescription/BengalItems';
import RiceItems from './FoodDescription/RiceItems';
import BengaliItems from './FoodDescription/BengaliItems';
import EnglishItems from './FoodDescription/EnglishItems';
import ChineseItems from './FoodDescription/ChineseItems';
import JapaneseItems from './FoodDescription/JapaneseItems';
import CakesItems from './FoodDescription/CakesItems';
import IceItems from './FoodDescription/IceItems';
import SweetsItems from './FoodDescription/SweetsItems';
import MocktailItems from './FoodDescription/MocktailItems';
import DrinkItems from './FoodDescription/DrinksItems';
import MilkshakeItems from './FoodDescription/MilkshakeItems';

export default function Food() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState('');

  const handleModalOpen = (foodType) => {
    setSelectedFood(foodType);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedFood('');
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

          <div className="col border p-3 text-center">
            <img
              src={roll}
              alt="Roll Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('roll')}
            />
            <p style={{ marginTop: '10px' }}><strong>Roll Items</strong></p>
          </div>
          <div className="col border p-3 text-center">
            <img
              src={momo}
              alt="Momo Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('momo')}
            />
            <p style={{ marginTop: '10px' }}><strong>Momo Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={pizza}
              alt="Pizza Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('pizza')}
            />
            <p style={{ marginTop: '10px' }}><strong>Pizza Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={Bengal}
              alt="Bengali Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('Bengal')}
            />
            <p style={{ marginTop: '10px' }}><strong>Bengali Items</strong></p>
          </div> 

          <div className="col border p-3 text-center">
            <img
              src={rice}
              alt="Rice Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('rice')}
            />
            <p style={{ marginTop: '10px' }}><strong>Rice Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={Bengali}
              alt="Bengali Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('Bengali')}
            />
            <p style={{ marginTop: '10px' }}><strong>Bengali Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={Japanese}
              alt="Japanese Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('Japanese')}
            />
            <p style={{ marginTop: '10px' }}><strong>Japanese Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={English}
              alt="English Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('English')}
            />
            <p style={{ marginTop: '10px' }}><strong>English Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={Chinese}
              alt="Chinese Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('Chinese')}
            />
            <p style={{ marginTop: '10px' }}><strong>Chinese Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={ice}
              alt="Ice Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('ice')}
            />
            <p style={{ marginTop: '10px' }}><strong>Ice Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={sweets}
              alt="Sweets Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('sweets')}
            />
            <p style={{ marginTop: '10px' }}><strong>Sweets Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={cakes}
              alt="Cakes Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('cakes')}
            />
            <p style={{ marginTop: '10px' }}><strong>Cakes Items</strong></p>
          </div>

          

          <div className="col border p-3 text-center">
            <img
              src={Drinks}
              alt="Drink Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('Drinks')}
            />
            <p style={{ marginTop: '10px' }}><strong>Drink Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={Milkshake}
              alt="Milkshake Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('Milkshake')}
            />
            <p style={{ marginTop: '10px' }}><strong>Milkshake Items</strong></p>
          </div>

          <div className="col border p-3 text-center">
            <img
              src={Mocktail}
              alt="Mocktail Items"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => handleModalOpen('Mocktail')}
            />
            <p style={{ marginTop: '10px' }}><strong>Mocktail Items</strong></p>
          </div>




        </div>


        {/* Conditional Rendering of Modals */}
        {selectedFood === 'mutton' && isModalOpen && (
          <FoodModal1 isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'chicken' && isModalOpen && (
          <ChickenItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'fish' && isModalOpen && (
          <FishItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'roll' && isModalOpen && (
          <RollItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'momo' && isModalOpen && (
          <MomoItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'pizza' && isModalOpen && (
          <PizzaItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'Bengal' && isModalOpen && (
          <BengalItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'Bengali' && isModalOpen && (
          <BengaliItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'rice' && isModalOpen && (
          <RiceItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'Japanese' && isModalOpen && (
          <JapaneseItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'English' && isModalOpen && (
          <EnglishItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'Chinese' && isModalOpen && (
          <ChineseItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
         {selectedFood === 'cakes' && isModalOpen && (
          <CakesItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
         {selectedFood === 'sweets' && isModalOpen && (
          <SweetsItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
         {selectedFood === 'ice' && isModalOpen && (
          <IceItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'Mocktail' && isModalOpen && (
          <MocktailItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'Drinks' && isModalOpen && (
          <DrinkItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {selectedFood === 'Milkshake' && isModalOpen && (
          <MilkshakeItems isOpen={isModalOpen} onClose={handleModalClose} />
        )}
        {/* Add more modals as per selected food types */}

        <Footer />
      </div>
    </div>
  );
}
