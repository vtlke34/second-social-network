import './App.css';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import UsersContainer from './components/Users/UsersContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>

        <HeaderContainer />

        <div className='flex-container'>

          <Navbar
          // sidebarData={props.store.getState().sidebar}
          >

          </Navbar>

          <Routes>

            <Route path='/profile/' element={<ProfileContainer />}>
              <Route path=':userId' element={<ProfileContainer />} />
            </Route>

            <Route path='/login' element={<Login />}>

            </Route>

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
