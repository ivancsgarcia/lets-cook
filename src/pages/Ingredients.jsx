import React from "react";
import "../css/ingredients.css";
import { Link } from "react-router-dom";
import Dish from "../components/Dish";
import Tab from "../components/Tab";
import Navbot from "../components/Navbot";

function Ingredients() {
  return (
    <div className="ingredients">
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

      <div className="ingre">
        <h3>Chocolate Crackle Layer</h3>
        <p>
          125g Copha, chopped <br />
          125g dark cooking chocolate 45%, chopped <br />
          ¼ cup (40g) icing sugar mixture <br />
          3 ½ cups (175g) Kellogg’s Coco Pops <br />½ cup (40g) desiccated
          coconut
        </p>
        <h3>Choc-Mint Cheesecake Filling</h3>
        <p>
          200g white cooking chocolate, melted and cooled to room temperature{" "}
          <br />
          2 x 250g cream cheese, softened and chopped <br />
          ¼ cup (55g) caster sugar <br />1 teaspoon gelatine dissolved in 1
          tablespoon boiling water, cooled <br />
          ½ cup (125 ml) thickened cream, whipped <br />
          1 teaspoon peppermint essence <br />
          35g Peppermint Crisp bar, finely chopped, plus extra for garnish
        </p>
        <h3>Topping</h3>
        <p>
          60g Copha, chopped <br />
          100g dark cooking chocolate 40%, chopped <br />
          Mint patties, mint biscuits, choc-mint balls and other choc-mint
          candies to decorate
        </p>
      </div>

      <Navbot />
    </div>
  );
}

export default Ingredients;
