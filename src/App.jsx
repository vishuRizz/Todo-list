import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import Heading1 from "./components/Heading1";
import Allitems from "./components/Allitems";
import React from "react";

function App() {
  let [arr, setArr] = useState([
    
  ])
  
  
  function handleNewItem(itemName, itemDueDate){
    const newTodoItems = [...arr, {name: itemName , date: itemDueDate}]
    setArr(newTodoItems);
  }
  
 const handleButtonClick = (todoItemName ) =>{
  const newtodoItems = arr.filter(item => item.name !== todoItemName)
  setArr(newtodoItems)
console.log(todoItemName, todoDate);
 }

  return (
    <>
      <center class="todo-container">
        
        <Heading1/>
        <AddTodo  handleNewItem={handleNewItem}  />
        <Allitems handleButtonClick={handleButtonClick}  arr={arr}/>
       
      </center>
    </>
  );
}

export default App;
