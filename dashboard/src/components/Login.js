import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from "axios";
import "./BuyActionWindow.css";

export default function Login() {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
      const { name, value } = e.target;
      setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
      }));
  };

  const handleClick = async () => {
    await axios.post("http://localhost:3002/login", { user });
      navigate('/'); // Redirect on success
   
  };
  

  return (
    <fieldset>
      <input 
        value={user.username} 
        onChange={handleChange} 
        name="username" 
        placeholder="Enter your username"
      />
      <input 
        type="text" // Ensure password is hidden
        value={user.password} 
        onChange={handleChange} 
        name="password" 
        placeholder="Enter your Password"
      />

      <button className="btn btn-grey" onClick={handleClick}>
        Login
      </button>
    </fieldset>
  );
}
