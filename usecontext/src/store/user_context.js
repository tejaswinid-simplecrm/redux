import React from "react";


const Text = React.createContext({

    text1:"UserPage",
    text2:"User_Component1",
    text3:"User_Component2",
    user:[]

})

export const textProvider = (props) => {
    return(
        <Text.Provider>
            {props.children}
        </Text.Provider>
    );
}

 export default Text;