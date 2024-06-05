import React from 'react'
import { useState } from 'react'
  


function AddTodo({ handleNewItem}) {

  const [todoName, setTodoName] = useState()
const [dueDate, setDueDate] = useState()

function handleName(e){
  setTodoName(e.target.value)
}
function handleDate(e){
  setDueDate(e.target.value)
}

function handleAddButton(){
  handleNewItem(todoName, dueDate)
  setDueDate("")
  setTodoName("")
}

  return (
    <div>
      <div className="container " id='AddTodo'>
            <div class="row cust-todo">
              <div class="col-2 border-1 mr-16 ">
                <input value={todoName} onChange={handleName}  type="text" placeholder="Enter to-do here" /></div>
              <div class="col-2 border-1 ml-28 ">
                <input value={dueDate} onChange={handleDate} type="date" placeholder="Enter to-do here"/></div>
              <div class="col-2 ml-36 "> <button onClick={handleAddButton} type="button" class="btn btn-success cust-button" id='Add'>Add</button></div>
            </div>
          </div>
    </div>
  )
}

export default AddTodo
