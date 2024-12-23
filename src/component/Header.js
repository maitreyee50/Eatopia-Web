import React,{useState} from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import About from './About/About';

import Login from './Profile/Login';
import ProfileDropdown from './Profile/Dropdwon';



export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const[showLoginModal, setShowLoginModal]= useState(false); 
  

  const toggleModal = () => {
    setShowModal(!showModal); // Toggle the modal
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  }

  

  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiarys">
  <div className="container-fluid">
  <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top "/>
    <a className="navbar-brand mx-2" >Eatopia</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" role="button"  to="/home" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" role="button" to="/food">Food</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  role="button" to="/restaurant">Restaurant</Link>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" role="button" onClick={toggleModal}>About</a>
        </li>
      </ul>
      <ProfileDropdown toggleLoginModal={toggleLoginModal} />
      
    </div>
  </div>
</nav>

{showModal && <About toggleModal={toggleModal} />}
{/* <Login showLoginModal={showLoginModal} toggleLoginModal={toggleLoginModal} /> */}
{showLoginModal && <Login toggleLoginModal={toggleLoginModal} />}
 
</div>
  )
}
