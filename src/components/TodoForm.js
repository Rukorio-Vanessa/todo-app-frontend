import React from "react";

function TodoForm(){
    return(
        <div className="card">
        <h2>Add Todo</h2>
        <form >
          <label >Title: </label>
          <input
            type="text"
            id="title"
          />
          <label>Description: </label>
          <input
            type="text"
            id="image"
          />
          <label>Status: </label>
          <select className="form-select">
               <option>Select</option>
               <option value={0}>CREATED</option>
               <option value={1}>IN PROGRESS</option>
               <option value={2}>COMPLETED</option>
               <option value={3}>CANCELLED</option>
          </select>
          <label>Priority: </label>
          <select className="form-select"htmlFor="description" >
               <option>Select</option>
               <option value={0}>LOW</option>
               <option value={1}>MEDIUM</option>
               <option value={2}>HIGH</option>
          </select>
          
          <button type="submit">Add to List</button>
        </form>
      </div>
    )
}

export default TodoForm;