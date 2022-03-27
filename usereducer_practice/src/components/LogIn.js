import React, { useReducer } from "react";



const LogIn = () => {

    const inputReducer = (state,action) => {
        if (action.type === "INPUT_VALUE"){
            return {value:action.val, isValid:action.val.includes("@)")};
        };
        if (action.type === "INPUT_VALIDITY"){
            return {value:state.value, isValid:state.value.includes("@")};
        };
        return {value:"",isValid:null};
    };

    const [inputState, dispatchInput] = useReducer(inputReducer,{value:"",isValid:null});

    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    const onChangeHandler = (event) => {
        console.log(event.target.value);
    };

    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="form1">Enter your Email:</label>
            <input id="input" name="input1" type="text" onChange={onChangeHandler}/>
            <input id="input2" name="input2" type="button"/>
        </form>

        </>
    );
}

export default LogIn;