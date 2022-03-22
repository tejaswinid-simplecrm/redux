import React, {useContext}  from 'react';
import Text from '../store/user_context';


const UserComponent2 = () => {
    const ctx = useContext(Text);
    return (
        <>
                
                <h2>
                    I'm a {ctx.text3}
                </h2>
                
        </>

    );
}

export default UserComponent2;