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

          <Navbar sidebarData={props.store.state.sidebar}></Navbar>

          <Routes>

            <Route path='/profile' element={<Profile
              profileData={props.store.state.profilePage}
              dispatch={props.store.dispatch.bind(props.store)}
            />}
            />

            <Route path='/messages/*' element={<Messages
              messagesData={props.store.state.messagesPage}
              dispatch={props.store.dispatch.bind(props.store)}
            />}
            />

          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
