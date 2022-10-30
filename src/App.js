import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className='flex-container'>
        <Navbar></Navbar>
        {/* <Profile></Profile> */}
        <Messages></Messages>

      </div>
    </div>
  );
}

export default App;
