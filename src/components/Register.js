import React from "react";

function Register(){
    return(
        <div className="register-card">
        <form >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
        />
        <label htmlFor="username">Username:</label>
        <input
          type="email"
          id="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
        />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
        />
        <button type="submit">Register</button>
      </form>
      </div>
    )
}

export default Register;