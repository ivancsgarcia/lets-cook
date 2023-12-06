import React from "react";
import { useState } from "react";
import "../css/signup.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your logic for handling the sign-up data (e.g., API call)
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="signup">
      <img src="/images/lets-cook.jpg" alt="Logo" />
      <h1>Create New Account</h1>

      <form onSubmit={handleSignUp}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <a href="signin">Sign In</a>
      </p>
    </div>
  );
}

export default SignUp;
