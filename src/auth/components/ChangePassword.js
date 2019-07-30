import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../api'
import messages from '../messages'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { alert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => alert(messages.changePasswordSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        alert(messages.changePasswordFailure, 'danger')
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      // <form className='auth-form' onSubmit={this.onChangePassword}>
      //   <h3>Change Password</h3>

      //   <label htmlFor="oldpw">Old Password</label>
      //   <input
      //     required
      //     name="oldPassword"
      //     value={oldPassword}
      //     type="password"
      //     placeholder="Old Password"
      //     onChange={this.handleChange}
      //   />
      //   <label htmlFor="newPassword">New Password</label>
      //   <input
      //     required
      //     name="newPassword"
      //     value={newPassword}
      //     type="password"
      //     placeholder="New Password"
      //     onChange={this.handleChange}
      //   />
      //   <button type="submit">Change Password</button>
      // </form> 

      <form className='auth-form 'onSubmit={this.onChangePassword}> 
  <div className='form-group' >
  <h3>Change Password</h3>
        <label htmlFor="oldpw"> Old Password</label>
        <input 
        className="form-control"
        required
            name="oldPassword"
            value={oldPassword}
            type="password"
            placeholder="Old Password"
            onChange={this.handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
<div className="form-group">
        <label htmlFor="newPassword">New Password</label>
        <input  className="form-control"  
        placeholder="Password" 
        required
        name="password"
        value={newPassword}
        type="password"
        onChange={this.handleChange}
        
        />
</div>
<button type="submit" class="btn btn-outline-secondary">Change</button>
</form>
    )
  }
}

export default withRouter(ChangePassword)
