import logo from './logo.svg';
import './App.css';
import UserPage from './users/UserPage';
import text from './store/user_context';

function App() {
  return (
    <text.Provider value={{  
      text1:"UserPage",
      text2:"User_Component1",
      text3:"User_Component2",
      user:[]}}>
    <UserPage></UserPage>
    </text.Provider>
  );
}

export default App;
