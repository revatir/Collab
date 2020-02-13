import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'

//Services
import { loginUser, registerUser, verifyUser, createCompany } from './Services/api_helper.js'

//Custom Components
import Header from './Components/Header'
import Nav from './Components/Nav.js'
import LandingPage from './Components/LandingPage.js'
import Explore from './Components/Explore.js'
import Login from './Components/Login.js'
import Register from './Components/Register.js'
import Profile from './Components/Profile.js'
import MyProfile from './Components/MyProfile.js'

//CSS Component
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: false,
      newCompany: {},
      apiDataLoaded: false,
      errorText: "",
      alert: null,
      counter: 0
    }
  }

  componentDidMount() {
    verifyUser();
    if (localStorage.getItem('authToken')) {
      const id = parseInt(localStorage.getItem('id'));
      const name = localStorage.getItem('name');
      const email = localStorage.getItem('email');
      const user = { name, email, id };
      user && this.setState({
        currentUser: user
      })
    }
  }

  onlyRegisterOnce = (registerData) => {
    if (this.state.counter === 0) {
      this.handleRegister(registerData)
      let button = document.querySelector('.btn-primary')
      button.style.display = 'none';
      this.setState({
        counter: 1
      })
    } else {
      return
    }
  }

  handleRegister = async (e, registerData, companyData) => {
    e.preventDefault();
    let currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      await createCompany(companyData, currentUser.id);
      this.props.history.push('/login');
    } else {
      this.setState({ errorText: currentUser.errorMessage })
    }
  }

  // handleCreateCompany = async (companyData) => {
  //   await createCompany(companyData, this.state.currentUser.id);
  // }

  handleLogin = async (e, loginData) => {
    e.preventDefault();

    if (!loginData.username || !loginData.password) {
      this.setState({
        errorText: "Please enter Username & Password!"
      })
    } else {
      try {
        const currentUser = await loginUser(loginData);
        this.setState({ currentUser })
        this.setState({
          errorText: ''
        })
        this.props.history.push('/explore');
      } catch (e) {
        console.log(e.message)
        if (e.message === "Request failed with status code 401") {
          e.message = "Wrong username or password"
          this.setState({
            errorText: e.message
          })
        } else {
          this.setState({
            errorText: e.message
          })
        }
      }
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
        <Nav
          loggedIn={this.state.currentUser}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Header
          loggedIn={this.state.currentUser}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Route exact path="/" render={() => (
          <LandingPage />
        )} />
        <Route path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            errorText={this.state.errorText}
            currentUser={this.state.currentUser} />
        )} />
        <Route path="/register" render={() => (
          <div>
            <Register
              handleRegister={this.handleRegister}
              handleCreateCompany={this.handleCreateCompany}
              currentUser={this.state.currentUser}
            />
            {this.state.alert}
          </div>
        )} />
        <Route path="/explore" render={(props) => (
          <div>
            <Explore currentUser={this.state.currentUser} />
          </div>
        )} />
        <Route exact path="/profile/:id" render={(props) => (
          <Profile
            users={this.state.users}
            userId={props.match.params.id}
            currentUser={this.state.currentUser}
          />
        )} />
        <Route exact path="/myprofile" render={(props) => (
          <MyProfile
            users={this.state.users}
            currentUser={this.state.currentUser}
            currentUserId={this.state.currentUser.id}
          />
        )} />
      </div>
    );
  }
}

export default withRouter(App);