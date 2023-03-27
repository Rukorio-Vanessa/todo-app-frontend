import React from "react";
import { useState } from "react";

const initialState = {
    title: "",
    description: "",
    status: "",
    priority: "",
};

function TodoForm({onAddTodo}){
    const [formData, setFormData] = useState(initialState);
    

    function handleChange(e) {
        setFormData({
        ...formData,
        [e.target.id]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }
      
    return(
        <div className="todo-card">
        <h2>Add Todo</h2>
        <form className="todo-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
          <label htmlFor="status">Status: </label>
          <select className="form-select" id="status" value={formData.status} onChange={handleChange}>
               <option>Select</option>
               <option value={0}>CREATED</option>
               <option value={1}>IN PROGRESS</option>
               <option value={2}>COMPLETED</option>
               <option value={3}>CANCELLED</option>
          </select>
          <label htmlFor="priority">Priority: </label>
          <select className="form-select" id="priority" value={formData.priority} onChange={handleChange} >
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