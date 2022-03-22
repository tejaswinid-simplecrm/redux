import React, {useContext} from 'react';
import Text from '../store/user_context';
import UserComponent1 from './UserComponent1';
import UserComponent2 from './UserComponent2';



const UserPage = () => {
    const ctx = useContext(Text);
    return (
    
        <div style={{margin:"50px",padding:"50px",borderStyle:"solid", borderColor:"maroon", borderWidth:"5px"}}>
                
                    <h1> I'm a {ctx.text1} </h1>

                    <UserComponent1></UserComponent1>
                    
                    <UserComponent1></UserComponent1>

        </div>
    );
}

export default UserPage;
