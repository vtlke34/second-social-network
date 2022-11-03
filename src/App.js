import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>

        <Header></Header>

        <div className='flex-container'>
          <Navbar sidebarData={props.state.sidebar}></Navbar>
          <Routes>
            <Route path='/profile' element={<Profile profileData={props.state.profilePage} />} />
            <Route path='/messages/*' element={<Messages messagesData={props.state.messagesPage} addMessage={props.addMessage} inputMessage={props.inputMessage} />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
