import React, { useState } from 'react';
import image1 from './restaurant Images/image 1.webp';
import image2 from './restaurant Images/image 2.avif';
import image3 from './restaurant Images/image 3.jpg';
import image4 from './restaurant Images/image 4.jpg';
import image10 from './restaurant Images/image 10.avif';
import image11 from './restaurant Images/image 11.jpg';
import image20 from './restaurant Images/image 20.jpg';
import image15 from './restaurant Images/image 15.jpg';
import image13 from './restaurant Images/image 13.jpg';
import image12 from './restaurant Images/image 12.avif';
import image14 from './restaurant Images/image 14.jpg';
import image18 from './restaurant Images/image 18.jpg';
import Footer from '../Footer/Footer';
import PalaceItems from '../Restaurant/Menu/PalaceofSpices';
import SaffronItems from '../Restaurant/Menu/SaffronAndSilk';
import ShahjahanItems from './Menu/ShahjahansDiningRoom';
import LotusItems from './Menu/LotusCourtyard';
import CharmedItems from './Menu/CharmedBrew';
import CozyItems from './Menu/CozyCorner';
import DailyItems from './Menu/DailyGrind';
import WhimsyItems from './Menu/WhimsyAndBrew';
import SerenitItems from './Menu/Serenite';
import LuneItems from './Menu/LuneAndPetals';
import AmoureItems from './Menu/Amoure';
import VelvetItems from './Menu/VelvetMoon';

export default function Restaurant() {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const handleModalOpen = (restaurant) => {
        setSelectedRestaurant(restaurant);
    };

    const handleModalClose = () => {
        setSelectedRestaurant(null);
    };

    return (
        <div>
            <div className="container text-center my-5">
                <div className="row">
                <div className="col p-1 text-center">
                        <img 
                            src={image1} 
                            alt="Palace of Spices" 
                            style={{ width: "300px", height: "250px", borderRadius: "5px", cursor: "pointer" }}
                            onClick={() => handleModalOpen('PalaceOfSpices')}
                        />
                        <p style={{ marginTop: "10px" }}><strong>Palace of Spices</strong></p>
                    </div>

                    <div className="col p-1 text-center">
                        <img 
                            src={image2} 
                            alt="Saffron & Silk" 
                            style={{ width: "300px", height: "250px", borderRadius: "5px", cursor: "pointer" }}
                            onClick={() => handleModalOpen('SaffronAndSilk')}
                        />
                        <p style={{ marginTop: "10px" }}><strong>Saffron & Silk</strong></p>
                    </div>

                    <div className="col p-1 text-center">
                        <img 
                            src={image3} 
                            alt="Shahjahan s Dining Room" 
                            style={{ width: "300px", height: "250px", borderRadius: "5px" , cursor: "pointer" }}
                            onClick={() => handleModalOpen('ShahjahansDiningRoom')}
                        />
                        <p style={{ marginTop: "10px" }}><strong>Shahjahan's Dining Room</strong></p>
                    </div>

                    <div className="col p-1 text-center">
                        <img 
                            src={image4} 
                            alt="Lotus Countyard" 
                            style={{ width: "300px", height: "250px", borderRadius: "5px" ,cursor: "pointer" }}
                            onClick={() => handleModalOpen('LotusCountyard')}
                        />
                        <p style={{ marginTop: "10px" }}><strong>Lotus Courtyard</strong></p>
                    </div>
                </div>

                
                <div className="row mt-4">
                    <div className="col p-1 text-center">
                        <img 
                            src={image11} 
                            alt="Charmed Brew" 
                            style={{ width: "300px", height: "250px", borderRadius: "5px",cursor: "pointer" }}
                            onClick={() => handleModalOpen('CharmedBrew')}
                        />
                        <p style={{ marginTop: "10px" }}><strong>Charmed Brew</strong></p>
                    </div>

                    <div className="col p-1 text-center">
                        <img 
                            src={image20} 
                            alt="Cozy Corner" 
                            style={{ width: "300px", height: "250px", borderRadius: "5px",cursor: "pointer" }}
                            onClick={() => handleModalOpen('CozyCorner')}
                        />
                        <p style={{ marginTop: "10px" }}><strong>Cozy Corner</strong></p>
                    </div>

                    <div className="col p-1 text-center">
                        <img 
                            src={image15} 
                            alt="Daily Grind" 
                            style={{ width: "300px", height: "250px", borderRadius: "5px",cursor: "pointer" }}
                            onClick={() => handleModalOpen('DailyGrind')}
                        />
                        <p style={{ marginTop: "10px" }}><strong>Daily Grind</strong></p>
                    </div>

                    <div className="col p-1 text-center">
                        <img 
                            src={image13} 
                            alt="Whimsy & Brew"
                            style={{ width: "300px", height: "250px", borderRadius: "5px",cursor: "pointer" }}
                            onClick={() => handleModalOpen('WhimsyAndBrew')}
                        />
                        <p style={{ marginTop: "10px" }}><strong>Whimsy & Brew</strong></p>
                    </div>
                </div>

               

                <div className="row mt-4">
                    <div className="col p-1 text-center">
                        <img 
                            src={image12} 
                            alt="Serenite" 
                            style={{ width: "300px", height: "250px", borderRadius: "5px",cursor: "pointer" }}
                            onClick={() => handleModalOpen('Serenite')}
                        />
                        <p style={{ marginTop: "10px" }}><strong>Serenite</strong></p>
                    </div>

                    <div className="col p-1 text-center">
                        <img 
                            src={image14} 
                            alt="Lune & Petals"
                            style={{ width: "300px", height: "250px", borderRadius: "5px",cursor: "pointer" }}
                            onClick={() => handleModalOpen('LuneAndPetals')}
                        />
                        <p style={{ marginTop: "10px" }}><strong>Lune & Petals</strong></p>
                    </div>

                    <div className="col p-1 text-center">
                        <img 
                            src={image18} 
                            alt="Amoure" 
                            style={{ width: "300px", height: "250px", borderRadius: "5px" ,cursor: "pointer"}}
                            onClick={() => handleModalOpen('Amoure')}
                        />
                        <p style={{ marginTop: "10px" }}><strong>Amoure</strong></p>
                    </div>
                    <div className="col p-1 text-center">
                        <img 
                            src={image10}
                            alt="Velvet Moon" 
                            style={{ width: "300px", height: "250px", borderRadius: "5px",cursor: "pointer"}}
                            onClick={() => handleModalOpen('VelvetMoon')}
                        />
                        <p style={{ marginTop: "10px" }}><strong>Velvet Moon</strong></p>
                    </div>
                </div>
            </div>

            {selectedRestaurant === 'PalaceOfSpices' && (
                <PalaceItems isOpen={true} onClose={handleModalClose} />
            )}
            {selectedRestaurant === 'SaffronAndSilk' && (
                <SaffronItems isOpen={true} onClose={handleModalClose} />
            )}
            {selectedRestaurant === 'ShahjahansDiningRoom' && (
                <ShahjahanItems isOpen={true} onClose={handleModalClose} />
            )}
            {selectedRestaurant === 'LotusCountyard' && (
                <LotusItems isOpen={true} onClose={handleModalClose} />
            )}
            {selectedRestaurant === 'CharmedBrew' && (
                <CharmedItems isOpen={true} onClose={handleModalClose} />
            )}
             {selectedRestaurant === 'CozyCorner' && (
                <CozyItems isOpen={true} onClose={handleModalClose} />
            )}
            {selectedRestaurant === 'DailyGrind' && (
                <DailyItems isOpen={true} onClose={handleModalClose} />
            )}
             {selectedRestaurant === 'WhimsyAndBrew' && (
                <WhimsyItems isOpen={true} onClose={handleModalClose} />
            )}
            {selectedRestaurant === 'Serenite' && (
                <SerenitItems isOpen={true} onClose={handleModalClose} />
            )}
            {selectedRestaurant === 'LuneAndPetals' && (
                <LuneItems isOpen={true} onClose={handleModalClose} />
            )}
            {selectedRestaurant === 'Amoure' && (
                <AmoureItems isOpen={true} onClose={handleModalClose} />
            )}
            {selectedRestaurant === 'VelvetMoon' && (
                <VelvetItems isOpen={true} onClose={handleModalClose} />
            )}
            <Footer/>
        </div>
    );
}
