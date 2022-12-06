import './App.css';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import UsersContainer from './components/Users/UsersContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import { connect } from 'react-redux';
import Preloader from './components/Common/Preloader';
// import style from './App.module.css'
import React from 'react';
import { initialazeApp } from './redux/app-reducer';


class App extends React.Component {
  componentDidMount() {
    this.props.initialazeApp()
  }

  render() {
    return (
      this.props.initialazed
        ? <div className='app'>
          <BrowserRouter>

            <HeaderContainer />

            <div className='flex-container'>

              <Navbar />

              <Routes>

                <Route path='/profile/' element={<ProfileContainer />}>
                  <Route path=':userId' element={<ProfileContainer />} />
                </Route>

                <Route path='/login' element={<LoginContainer />} />

                <Route path='/messages/*' element={<MessagesContainer />} />

                <Route path='/users' element={<UsersContainer />} />

              </Routes>
            </div>

          </BrowserRouter>
        </div>
        : <Preloader />

    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialazed: state.app.initialazed
  }
}

export default connect(mapStateToProps, { initialazeApp })(App);
