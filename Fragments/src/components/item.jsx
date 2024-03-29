import styles from "./item.module.css"

function Item ({food_items}){
  return <li className={`${styles['kg-item']} list-group-item`}><span className={styles['kg-span']}>{food_items}</span></li>
}


export default Item;