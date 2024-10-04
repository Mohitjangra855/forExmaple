import React, { useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";

export default function Signup() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };
  const handleClick = async () => {
    await axios.post("http://localhost:3002/signup", {user} );
  };
  return (
    <div>
      <fieldset>
        <input
          onChange={handleChange}
          value={user.username}
          name="username"
        ></input>
        <input
          onChange={handleChange}
          value={user.email}
          name="email"
        ></input>
        <input
          onChange={handleChange}
          value={user.password}
          name="password"
        ></input>
        <Link to="/" onClick={handleClick}>Signup</Link>
      </fieldset>
    </div>
  );
}
