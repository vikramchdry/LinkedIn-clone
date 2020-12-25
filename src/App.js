import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';

function App() {

  return (

    <div className="app">
      {/*Header */}
      <Login />

      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/*App body*/}
        {/*side bar*/}
        {/*feed*/}
        {/*Widget*/}
      </div>
    </div>
  );
}

export default App;
