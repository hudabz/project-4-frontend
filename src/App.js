import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
///////////////////////////////////////////////
// import CommentIndex from './comments/CommentIndex'
import CommentShow from './comments/CommentShow'
// import CommentCreate from './comments/CommentCreate'
import CommentEdit from './comments/CommentEdit'
////////////////////////////////////////////
import PostIndex from './posts/PostIndex'
import PostShow from './posts/PostShow'
import PostCreate from './posts/PostCreate'
import PostEdit from './posts/PostEdit' 
import Dashboard from './posts/Dashboard'
import Home from './welcome/Home'
//////////////////////////////////////////
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'

class App extends Component {
  constructor () {
    super() 

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} /> 
          
        </main>

        <AuthenticatedRoute user={user} exact path='/posts' render={() => (
            <PostIndex user={user} />
          )} /> 
           <AuthenticatedRoute user={user} exact path='/posts/:id' render={(props) => (
            <PostShow user={user} postId={props.match.params.id} />
          )} /> 
           <AuthenticatedRoute user={user} path='/create' render={() => (
            <PostCreate user={user} />
          )} /> 
            <AuthenticatedRoute user={user} path='/posts/:id/edit' render={() => (
            <PostEdit user={user} />
          )} /> 

           {/* <AuthenticatedRoute user={user} exact path='/comments' render={() => (
            <CommentIndex alert={this.alert} user={user} />
          )} />  */}
           <AuthenticatedRoute user={user} exact path='/comments/:id' render={(props) => (
            <CommentShow user={user} commentId={props.match.params.id} />
          )} /> 
           {/* <AuthenticatedRoute user={user} path='/create' render={() => (
            
          )} />  */}
            <AuthenticatedRoute user={user} path='/comments/:id/edit' render={() => (
            <CommentEdit user={user} />
          )} />  
            <AuthenticatedRoute user={user} path='/dashboard' render={() => (
            <Dashboard user={user} />
          )} /> 
           <Route user={user} path='/home' render={() => (
            <Home />
          )} /> 
      </React.Fragment>
    )
  }
}

export default App
