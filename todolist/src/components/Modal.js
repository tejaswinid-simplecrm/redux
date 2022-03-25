const Modal = (props)=>{

    return(
        <div className="modal">
            <p> Are you sure?</p>
            <button onClick={props.onClick} className="btn btn--alt">cancel</button>
            <button onClick={props.onClick} className="btn">confirm</button>
            </div>
    );
};
export default Modal;