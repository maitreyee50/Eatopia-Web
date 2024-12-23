import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Loginstyle.css'


export default function Login({ toggleLoginModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorMessage(""); // Reset error message

    // Prepare login data to be sent to the PHP backend
    const loginData = { email, password };

    try {
      const response = await fetch("http://localhost/Eatopia-Service/Login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        
        localStorage.setItem("username", data.username);  
        alert("Login successful!");
        toggleLoginModal(); 
        navigate("/home"); 
      } else {
        
        setErrorMessage(data.message);
      }
    } catch (error) {
      // Handle network errors
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button type="button" className="btn-close" onClick={toggleLoginModal}>
              
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

