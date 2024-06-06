import React from 'react'
import { useState, useRef } from 'react'
  


function AddTodo({ handleNewItem}) {

  const todoNameElement = useRef();
  const todoDueDate = useRef();
  
function handleAddButton(){
  const valueName = todoNameElement.current.value;
  const valueDate = todoDueDate.current.value;
  todoNameElement.current.value = ""
  todoDueDate.current.value = ""
  handleNewItem(valueName, valueDate)
  
}

  return (
    <div>
      <div className="container " id='AddTodo'>
            <div class="row cust-todo">
              <div class="col-2 border-1 mr-16 ">
                <input  ref={todoNameElement}  type="text" placeholder="Enter to-do here" /></div>
              <div class="col-2 border-1 ml-28 ">
                <input ref={todoDueDate} type="date" placeholder="Enter to-do here"/></div>
              <div class="col-2 ml-36 "> <button onClick={handleAddButton} type="button" class="btn btn-success cust-button" id='Add'>Add</button></div>
            </div>
          </div>
    </div>
  )
}

export default AddTodo
