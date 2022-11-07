import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import UsersContainer from './components/Users/UsersContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>

        <Header></Header>

        <div className='flex-container'>

          <Navbar
          // sidebarData={props.store.getState().sidebar}
          >

          </Navbar>

          <Routes>

            <Route path='/profile' element={<Profile />} />

            {/* <Route path='/messages/*' element={<Messages
              messagesData={props.store.getState().messagesPage}
              dispatch={props.store.dispatch.bind(props.store)}
            />}
            /> */}

            <Route path='/users' element={<UsersContainer />} />

          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
