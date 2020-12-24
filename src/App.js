import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {

  return (

    <div className="app">
      {/*Header */}

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
