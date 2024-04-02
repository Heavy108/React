import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage  from './components/WelcomeMessage';
import "./App.css";

function App() {
 
  const [todoItems ,setTodoItems] =useState([]) ;

  const handleNewItem =(itemName ,itemDueDate) =>{
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems =[...todoItems ,{name: itemName , dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  }

  const handleDeleteItem =(todoName) =>{
    const newTodoItems =todoItems.filter(item => item.name !== todoName);
    setTodoItems(newTodoItems);
    console.log("Item Deleted"  + " " +todoName );

  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMessage ></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick ={handleDeleteItem}/>
      
    </center>
  );
}

export default App;
