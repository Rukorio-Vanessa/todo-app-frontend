import React from "react";
import Heading from "./Heading";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function Home(){
    return(
        <>
        <Heading/>
        <TodoForm/>
        <TodoItem/>
        </>
    )
}

export default Home;