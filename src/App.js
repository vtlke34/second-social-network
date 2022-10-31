import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>

        <Header></Header>

        <div className='flex-container'>
          <Navbar></Navbar>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/messages/*' element={<Messages />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
