import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import { useState } from "react";
import NewTodo from "./components/NewTodo";

function App() {

  const [todos , setTodos] = useState(['running','jogging','sleeping','enjoy']);
  const pusher =(title)=>{
    setTodos ([...todos, title]);
  }
  
 
  return (
    <>
   
     
        <NewTodo  addTitle = {pusher}></NewTodo>
        <h1>My Todos</h1>
        {
        todos.map(todoo => {
          return <Todo title = {todoo}/>
        }) 
      }

     
    </>
  );
}

export default App;