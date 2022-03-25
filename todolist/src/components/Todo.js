import { useState } from "react"
import Modal from "./Modal";
import Backdrop from "./Backdrop";


const Todo = (props) =>{
  const [showModal,setShowModal]=useState(false);
  const showModalHandler=()=>{
    setShowModal(true);
  }
  const hideModalHandler=()=>{
    setShowModal(false);

}
return(
  <>
  <div className="card">
    <p>{props.title}</p>
    
    <div className="actions">
    <button className="btn" onClick={showModalHandler}>delete</button>


    </div>

  </div>
      {showModal && <Backdrop onClick={hideModalHandler}/>}
      {showModal && <Modal onClick={hideModalHandler} />}
      </>
      );
}
export default Todo;