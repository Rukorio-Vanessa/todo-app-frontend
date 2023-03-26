import React from "react";

function TodoItem({spice}){
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
                <tr>
                    <td>Code Challenge</td>
                    <td>Complete coding challenge</td>
                    <td>IN PROGRESS</td>
                    <td>HIGH</td>
                    <td className="row">
                        <div className="col-6">
                            <button className="btn btn-info">Update</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Online Lecture</td>
                    <td>Attend online lecture on serialization in rails</td>
                    <td>COMPLETED</td>
                    <td>HIGH</td>
                    <td className="row">
                        <div className="col-6">
                            <button className="btn btn-info">Update</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Personal website</td>
                    <td>Create a personal website to showcase coding projects</td>
                    <td>CREATED</td>
                    <td>MEDIUM</td>
                    <td className="row">
                        <div className="col-6">
                            <button className="btn btn-info">Update</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Review and Debug</td>
                    <td>Review and debug code for group project</td>
                    <td>IN PROGRESS</td>
                    <td>LOW</td>
                    <td className="row">
                        <div className="col-6">
                            <button className="btn btn-info">Update</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Virtual Conference</td>
                    <td>Attend virtual tech conference </td>
                    <td>CANCELLED</td>
                    <td>LOW</td>
                    <td className="row">
                        <div className="col-6">
                            <button className="btn btn-info">Update</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
      )
}

export default TodoItem;