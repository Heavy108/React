import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Food_items from "./components/food_items";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let food_items =[];
  // let food_items = ["dal", "green vegetable", "Roti", "Salad", "Milk"];

  let [textToShow, setTextState] = useState();
  let [food_items, setFoodItems] = useState(["dal", "green vegetable", "Roti", "Salad"]);
  // console.log(`Current value of textState: ${textToShow}`);

  const onkeydown = (event) => {
    if (event.key === 'Enter'){
      let newFoodItem =event.target.value;
      let newItems = [...food_items,newFoodItem];
      setFoodItems(newItems);
      console.log("Food value Entered is "+ newFoodItem);
    }
    
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <p>{textToShow}</p>
        <ErrorMessage items={food_items} />
        <FoodInput handlekeyDown={onkeydown} />
        <Food_items items={food_items} />
      </Container>

      {/* <Container>
      <p>EAT AND DIE</p>
    </Container> */}
    </>
  );
}
export default App;
