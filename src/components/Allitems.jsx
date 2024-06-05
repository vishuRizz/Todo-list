import React from 'react'
import Maintodo from "./Maintodo";


function Allitems({arr}) {
  return (
    <>
    <div className="Todo-items">
        {arr.map((e)=> <Maintodo todoDate={e.date} todoName={e.name} />)} 
        
        </div>
    </>
  )
}

export default Allitems
