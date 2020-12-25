import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { useSelector } from "react-redux";
import { selectUser } from './components/userSlice';


function App() {

  const user = useSelector(selectUser);


    return (


    <div className="app">
        {/*Header */} 
      <Header />
        {!user ? <Login /> : (
        <div className="app__body">
        <Sidebar />
        <Feed />
        {/*App body*/}
        {/*side bar*/}
        {/*feed*/}
        {/*Widget*/}
      </div>

        )}

    </div>
  );
}

export default App;
