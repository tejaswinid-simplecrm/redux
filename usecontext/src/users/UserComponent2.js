import React, {useContext}  from 'react';
import text from '../store/user_context';


const userComponent2 = () => {
    // const ctx = useContext(text);
    return (
        <>
        <text.Consumer>
        {(ctx) => {
            return(
            <>
                
                <h2>
                    I'm a {ctx.text3}
                </h2>
                
            </>
            );
        }}
        </text.Consumer>
        </>

    );
}

export default userComponent2;