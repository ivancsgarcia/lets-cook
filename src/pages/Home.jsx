import Carousel from "../components/Carousel";
import Navbot from "../components/Navbot";
import "../css/home.css";
import Card from "../components/Card";
import ScrollContainer from "../components/ScrollContainer";

function Home() {
  const carousel_images = [
    "/images/carousel-1.jpeg",
    "/images/carousel-2.jpeg",
    "/images/carousel-3.jpeg",
    "/images/carousel-4.jpeg",
    // Add more image URLs as needed
  ];

  const cards = [
    {
      id: 1,
      title: "Choc-Mint Crackle Cheesecake Lasagne",
      description: "Dessert",
      imageUrl: "/images/Choc-Mint_Cheesecake.webp",
    },
    {
      id: 2,
      title: "Sweet Chilli Turkey Noodle Stir-Fry",
      description: "Poultry",
      imageUrl: "/images/Sweet _Chilli_Turkey_Noodle_Stir-Fry.webp",
    },
    {
      id: 3,
      title: "Mexican Chicken And Rice Casserole",
      description: "Stir Fry",
      imageUrl: "/images/Mexican_Chicken_And_Rice_Casserole.webp",
    },
    {
      id: 4,
      title: "Slow-Roasted Lamb Shoulder With Lemon, Garlic And Rosemary",
      description: "Meat",
      imageUrl:
        "/images/Slow-Roasted_Lamb_Shoulder_With_Lemon,_Garlic_And_Rosemary.webp",
    },
    {
      id: 5,
      title: "Texas Style Butterflied BBQ Prawns",
      description: "Seafood",
      imageUrl: "/images/Texas_Style_Butterflied_BBQ_Prawns.webp",
    },
    {
      id: 6,
      title: "Homemade Indian Roti",
      description: "Sides",
      imageUrl: "/images/Homemade_Indian_Roti.webp",
    },

    // Add more cards as needed
  ];

  return (
    <div className="home">
      <h2>Hello, User!</h2>
      <p>What do you want to cook for today?</p>
      <input type="text" placeholder="Search" />

      <div className="row-a">
        <h3>Feature Recipes</h3>
        <Carousel carousel_images={carousel_images} />
      </div>

      <div className="row-b">
        <h3>Recipes For You</h3>
        <div className="rfy">
          <ScrollContainer>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
          </ScrollContainer>
        </div>
      </div>

      <div className="row-c">
        <h3>All Recipes</h3>
        <div className="ar">
          <ScrollContainer>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
          </ScrollContainer>
        </div>
      </div>

      <Navbot />
    </div>
  );
}

export default Home;
