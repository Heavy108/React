import styles from "./item.module.css";

function Item ({food_items}){
  const handleBuyButtonClicked =(event) =>{
    console.log(event);
    console.log(`${food_items} being bought`);
  };
  return <li className={`${styles['kg-item']} list-group-item`}><span className={styles['kg-span']}>{food_items}</span>
  <button className={`${styles.button} btn btn-info`} onClick={(event)=> handleBuyButtonClicked(event)}>Buy</button>
  </li>
}


export default Item;