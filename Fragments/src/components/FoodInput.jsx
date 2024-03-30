import style from "./Food.module.css";
const FoodInput =({handlekeyDown}) =>{
  

  return <input className={style.foodInput}type="text" placeholder="Enter Food Name" onKeyDown={handlekeyDown}></input>;
}
export default FoodInput;