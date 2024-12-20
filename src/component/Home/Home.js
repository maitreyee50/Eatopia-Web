import React,{useEffect} from 'react';
import image1 from '../Carousel images/image1.avif';
import image2 from '../Carousel images/images2.jpg';
import image3 from '../Carousel images/images3.jpeg';
import video2 from '../Carousel images/pizza.mp4';
import video3 from '../Carousel images/mixed.mp4';
import image4 from '../Carousel images/image4.jpg';
import image5 from '../Carousel images/image 5.jpg';
import image6 from '../Carousel images/image6.png';
import image7 from '../Carousel images/image7.png';
import image8 from '../Carousel images/image8.png';
import video4 from '../Carousel images/video 4.mp4';
import video1 from '../Carousel images/video1.mp4';
import '../Home/CarouselStyle.css';
import Footer from '../Footer/Footer';
//import Footer from '../Footer/Footer';

export default function Home() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const carousel = document.querySelector('#carouselExample');
      const carouselInstance = new window.bootstrap.Carousel(carousel);
      carouselInstance.next(); 
    }, 2000); 

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once on mount
  return (
    <>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active" id="carouselitems">
    <img
            src={image3}
            className="d-block"
            alt="Placeholder Image 1"
          />
    </div>

    <div className="carousel-item" id="carouselitems">
    <img
            src={image2}
            className="d-block"
            alt="Placeholder Image 2"
          />
    </div>
    <div className="carousel-item" id="carouselitems">
    <img
            src={image1}
            className="d-block"
            alt="Placeholder Image 3"
          />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="parent-div2 " >
      <div className="mid-div">
        
        <div className="image-section">
          <img src={image4} alt="image4" className="image" />
        </div>

        {/* Text Section */}
        <div className="text-section">
          <p className="quote">
          "At Eatopia, every bite is a testament to excellence, where exceptional quality and flavor elevate your dining experience."
          </p>
        </div>
      </div>
</div>





<div className="parent-div">

      <div className="mid-div">
        <video
          src={video2}
          className="video"
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Right Div: 65% */}
      <div className="right-div">
        <video
          src={video3}
          className="video"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>

    <div className="parent-div3 " >
      <div className="left-div2">
        
        <div className="image-section1">
          <img src={image5} alt="image5" className="image2" />
        </div>

      
        <div className="text-section1">
          <p className="quote1">
          "Indulge in the extraordinary at Eatopia, where exquisite flavors and impeccable service create an unforgettable dining experience."
          </p>
        </div>
      </div>
    </div>

    <div className="gallery">
      <div className='offer'>
        <img src={image6} alt="Image 6" className="gallery-image" />
        <img src={image8} alt="Image 8" className="gallery-image" />
        <img src={image7} alt="Image 7" className="gallery-image" />
      </div>
    </div>

    <div className="parent-div4">
      
      <div className="mid-div1">
        <video
          src={video1}
          className="video1"
          autoPlay
          loop
          muted
        ></video>
      </div>

    
      <div className="right-div1">
        <video
          src={video4}
          className="video1"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
   
<Footer/>



    </>
  )
}
