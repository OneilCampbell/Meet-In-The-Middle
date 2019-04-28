import React, { Component } from 'react';
import Axios from 'axios'

import common from '../../common'

import './style.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }

  handleChange =(event)=>{
    const {name, value} = event.target

    this.setState({[name]: value})
  }
  sendLogin =(event)=>{
    event.preventDefault()
    const login={
      name: this.state.username, 
      password: this.state.password}

    Axios.put('/login', login)

  }


  render() { 
    return ( 
      <div>
        <h1>This is the Login Page</h1>
        <form onSubmit={this.sendLogin}>
            <input name = 'username' onChange={this.handleChange}/>
            <input type='password' name = 'password' onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
     );
  }
}
 
export default Login;