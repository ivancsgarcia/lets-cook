import React from "react";
import { Link } from "react-router-dom";
import "../css/landing.css";

function Landing() {
  return (
    <div className="landing">
      <img src="/images/lets-cook.jpg" alt="" />
      <h1>
        Welcome To <br /> Lets Cook
      </h1>
      <p>
        🍳 Welcome to Let's Cook – Your Recipe Haven! 📚 Unleash your inner chef
        with mouthwatering delights. Simple. Delicious. Let's Cook! 🌟
        #EasyRecipes #FoodieFun
      </p>
      <div>
        <div>
          <Link to={"/signin"}>Sign In</Link>
        </div>
        <div>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
