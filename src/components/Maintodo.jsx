import React from 'react'

function Maintodo({todoName, todoDate, handleDeleteButton}) {
  return (
  <>
 <div className="container cust-todo">
            <div class="row cust-todo">
              <div className="col-4 ">{todoName}</div>
              <div className="col-4 "> {todoDate} </div>
              <div className="col-2 "> <button onClick={handleDeleteButton} type="button" className="btn btn-secondary cust-button">Delete</button></div>
            </div>
          </div>
  </>
  )
}

export default Maintodo
