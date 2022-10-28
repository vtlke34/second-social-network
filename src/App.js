
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className='flex-container'>
        <Navbar></Navbar>
        <Profile></Profile>


      </div>
    </div>
  );
}

export default App;
