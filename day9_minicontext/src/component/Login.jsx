import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ password, username, email });
  };
  return (
    <div>
      <h2>Login Here</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="username"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <input
        value={email}
        onChange={(e) => setemail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
