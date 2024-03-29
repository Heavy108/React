import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Food_items from "./components/food_items";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  // let food_items =[];
  let food_items = ["dal", "green vegetable", "Roti", "Salad", "Milk"];

  return (
    <React.Fragment>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={food_items} />
      <Food_items items={food_items} />
    </React.Fragment>
  );
}
export default App;
