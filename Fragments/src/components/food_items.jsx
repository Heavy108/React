import Item from "./item";
const Food_items =({items}) =>{
  
  return (
    <ul className="list-group">
      {/* <li class="list-group-item active" aria-current="true">
        An active item
      </li>
      <li class="list-group-item">Pizza</li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li> */}
      {items.map((item) =>(
       <Item key={item} Food_items={item}/>
      ))}
    </ul>
  )
}
export  default Food_items;