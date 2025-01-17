import './App.css';
//import About from './component/About/About';
import Food from './component/Food/Food';
import Header from './component/Header';
import Home from './component/Home/Home';
import Login from './component/Profile/Login';
import Restaurant from './component/Restaurant/Restaurant';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="/food" element={<Food />} />
           <Route path="/home" element={<Home/>} /> 
          <Route path="/restaurant" element={<Restaurant/>} />
          {/* <Route path="/login" element={<Login/>} /> */}
          {/* <Route path="/about" element ={<About/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
