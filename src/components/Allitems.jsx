import React from 'react'
import Maintodo from "./Maintodo";


function Allitems({arr,handleButtonClick }) {
  return (
    <>
    <div className="Todo-items">
        {arr.map((e)=> <Maintodo handleButtonClick={handleButtonClick}  todoDate={e.date} todoName={e.name} />)} 
        
        </div>
    </>
  )
}

export default Allitems
