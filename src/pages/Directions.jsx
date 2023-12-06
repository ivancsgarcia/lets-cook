import React from "react";
import "../css/directions.css";
import { Link } from "react-router-dom";
import Dish from "../components/Dish";
import Tab from "../components/Tab";
import Navbot from "../components/Navbot";

function Directions() {
  return (
    <div className="directions">
      <div className="top">
        <Link to={"/home"}>
          <img src="/images/svg/chevron-left.svg" alt="" className="left" />
        </Link>
        <Link>
          <img src="/images/svg/bookmark.svg" alt="" className="bookmark" />
        </Link>
      </div>

      <div className="recipe">
        <Dish
          title={"Choc-Mint Crackle Cheesecake Lasagne"}
          imageUrl={"/images/Choc-Mint_Cheesecake.webp"}
        />
      </div>

      <Tab />

      <div className="dire">
        <h3>Chocolate Crackle Layer</h3>
        <h4>Step 1</h4>
        <p>
          Grease and line the base and sides of a 11.5cm x 20cm (base
          measurement) loaf pan. Leave a 5cm overhang on the two long sides.
        </p>
        <br />
        <h4>Step 2</h4>
        <p>
          Combine Copha, chocolate and icing sugar in a large heatproof bowl
          over a saucepan of gently simmering water, stir until melted. Remove
          from heat.
        </p>
        <br />
        <h4>Step 3</h4>
        <p>
          Add Coco Pops and coconut to the Copha mixture and stir to combine.
          Set aside.
        </p>
        <h3>Choc-Mint Cheesecake Filling</h3>
        <h4>Step 1</h4>
        <p>
          Using electric beaters, beat cream cheese and sugar together until
          smooth. Add melted white chocolate and dissolved gelatine and beat
          until well mixed. Gently fold through the whipped cream, essence and
          peppermint crisp.
        </p>
        <br />
        <h4>Step 2</h4>
        <p>
          Spoon a third of the crackle mixture into prepared pan, flatten gently
          with the back of a spoon. Spoon over a third of the cheesecake
          filling. Smooth top. Sprinkle evenly with half the remaining crackle
          mixture.
        </p>
        <br />
        <h4>Step 3</h4>
        <p>
          Repeat with remaining cheesecake filling and crackle mixture.
          Refrigerate for 4 hours or overnight, until set.
        </p>
        <h3>Topping</h3>
        <h4>Step 1</h4>
        <p>
          Melt Copha and chocolate together in a bowl over a saucepan of gently
          simmering water. Cool, stirring occasionally until thickened and
          spreadable.
        </p>
        <br />
        <h4>Step 2</h4>
        <p>
          When ready to serve, spoon melted topping over cheesecake. Decorate
          with a selection of choc-mint biscuits and sweets.
        </p>
      </div>

      <Navbot />
    </div>
  );
}

export default Directions;
