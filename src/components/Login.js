import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";


function Login(){

    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/home");

      };

    return(
        <div className="login-card">
        <form onSubmit={handleSubmit}>
          <label htmlFor="emailOUsername">Email/Username:</label>
          <input
            type="text"
            id="emailOrUsername"
            value={emailOrUsername}
            onChange={(event) => setEmailOrUsername(event.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
}

export default Login;