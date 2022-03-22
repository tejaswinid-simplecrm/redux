import React from "react";


const text = React.createContext({

    text1:"UserPage",
    text2:"User_Component1",
    text3:"User_Component2",
    user:[]

})

export const textProvider = (props) => {
    return(
        <text.Provider>
            {props.children}
        </text.Provider>
    );
}

 export default text;