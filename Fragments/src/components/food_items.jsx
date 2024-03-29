import Item from "./item";
const Food_items =({items}) =>{
  
  return (
    <ul className="list-group">
     
      {items.map((item) =>(
       <Item key={item} food_items={item}/>
      ))}
    </ul>
  )
}
export  default Food_items;