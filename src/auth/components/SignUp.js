import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
<form className='auth-form ' onSubmit={this.onSignUp}>
  <div className='form-group' >
  <h3>Sign Up</h3>
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
<div className="form-group">
<label htmlFor="passwordConfirmation">Confirm Password</label>
        <input className="form-control" 
        id="exampleInputPassword1"
         required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
         placeholder="Confirm Password"
         onChange={this.handleChange}
       />
</div> 
<button type="submit" class="btn btn-outline-secondary">Sign Up</button>
</form>
    )
  }
}

export default withRouter(SignUp)
