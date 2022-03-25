import App from "../App";
import { useState } from "react";

const NewTodo= (props) => {
    let myTitle = '';
    const saveTitle = (event) => {
        event.preventDefault();
        console.log (myTitle);
        props.addTitle(myTitle);
      
      }
       const showTitle = (event) => {
        console.log (event.target.value);
        myTitle = event.target.value;
      }
  
  return(
  <form onSubmit={saveTitle} >
  <label for = 'title'>title:</label>
  <input type='text' id = 'title' name = 'title' onChange={showTitle}></input>
  <input type='submit' value='submit'></input>
</form>
  );
}
export default NewTodo;