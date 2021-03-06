import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../api'
import messages from '../messages'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signInSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state

    return (
      // <form className='auth-form' onSubmit={this.onSignIn}>
      //   <h3>Sign In</h3>
      //   <label htmlFor="email">Email</label>
      //   <input
      //     required
      //     type="email"
      //     name="email"
      //     value={email}
      //     placeholder="Email"
      //     onChange={this.handleChange}
      //   />
      //   <label htmlFor="password">Password</label>
      //   <input
      //     required
      //     name="password"
      //     value={password}
      //     type="password"
      //     placeholder="Password"
      //     onChange={this.handleChange}
      //   />
      //   <button type="submit">Sign In</button>
      // </form>

<form className='auth-form 'onSubmit={this.onSignIn}>
  <div className='form-group' >
    <h3>Sign In</h3>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input className="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp" 
        placeholder="Enter email"
        required
        type="email"
        name="email"
        value={email}
        onChange={this.handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
<div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input  className="form-control"  
        id="exampleInputPassword1" 
        placeholder="Password" 
        required
        name="password"
        value={password}
        type="password"
        onChange={this.handleChange}
        
        />
</div>
<button type="submit" class="btn btn-outline-secondary">Sign In</button>
</form>
    )
  }
}

export default withRouter(SignIn)
