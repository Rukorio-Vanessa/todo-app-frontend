import React from "react";
import { useState } from "react";

function TodoItem({spice}){

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Code Challenge',
            description: 'Complete coding challenge',
            status: 'IN PROGRESS',
            priority: 'HIGH'
        },
        {
            id: 2,
            title: 'Online Lecture',
            description: 'Attend online lecture on serialization in rails',
            status: 'COMPLETED',
            priority: 'HIGH'
        },
        {
            id: 3,
            title: 'Personal website',
            description: 'Create a personal website to showcase coding projects',
            status: 'CREATED',
            priority: 'MEDIUM'
        },
        {
            id: 4,
            title: 'Review and Debug',
            description: 'Review and debug code for group project',
            status: 'IN PROGRESS',
            priority: 'LOW'
        },
        {
            id: 5,
            title: 'Virtual Conference',
            description: 'Attend virtual tech conference',
            status: 'CANCELLED',
            priority: 'LOW'
        },
        {
            id: 6,
            title: 'Virtual Conference',
            description: 'Attend virtual tech conference',
            status: 'CANCELLED',
            priority: 'LOW'
        }
    ]);

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    const handleUpdateTodo = (id) => {
        const todoToUpdate = todos.find(todo => todo.id === id);
        const updatedTitle = prompt('Enter a new title:', todoToUpdate.title);
        const updatedDescription = prompt('Enter a new description:', todoToUpdate.description);
        const updatedStatus = prompt('Enter a new status:', todoToUpdate.status);
        const updatedPriority = prompt('Enter a new priority:', todoToUpdate.priority);
      
        const updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              title: updatedTitle,
              description: updatedDescription,
              status: updatedStatus,
              priority: updatedPriority
            };
          }
          return todo;
        });
      
        setTodos(updatedTodos);
    }

    return(
        <table className="todo-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Options</th>
                </tr>

            </thead>
            <tbody>
            {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.title}</td>
                        <td>{todo.description}</td>
                        <td>{todo.status}</td>
                        <td>{todo.priority}</td>
                        <td className="row">
                            <div className="col-6">
                                <button className="btn btn-info"  onClick={() => handleUpdateTodo(todo.id)}>Update</button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      )
}

export default TodoItem;