import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { useSelector } from "react-redux";
import { login, logout, selectUser } from './components/userSlice';
import { useEffect } from 'react';
import { auth } from './components/firebase';
import { useDispatch } from "react-redux";


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    })

  }, []);


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
