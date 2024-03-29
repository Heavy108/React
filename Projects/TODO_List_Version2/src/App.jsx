import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "BuyMilk",
      dueDate: "4/10/2024",
    },
    {
      name: "Drink phenyl",
      dueDate: "4/10/2024",
    },
    {
      name: "Jump of the Bridge",
      dueDate: "5/10/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
      
    </center>
  );
}

export default App;
