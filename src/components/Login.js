import React from "react";

function Login(){
    return(
        <div className="login-card">
        <form>
          <label>Email/Username:</label>
          <input
            type="text"
            id="emailOrUsername"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
}

export default Login;