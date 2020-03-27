import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer';

class Auth extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         username: '',
         password: '',
         profile_pic: ''
         // registerView: false
       }
   }

   handleInput = (input) => {
      this.setState({
         [input.target.name]: input.target.value
      })
   }

   handleLogin = () => {
      const {username, password} = this.state;
      axios.post('/auth/login', {username, password})
      .then(res => {
         this.props.getUser(res.data);
         this.props.history.push('/dashboard');
      })
      .catch(err => {
         console.log(err);
         return alert('Invalid username or password')
      });
   }

   handleRegister = () => {
      const {username, password, profile_pic} = this.state;
      if(password !== '') {
         axios.post('/auth/register', {username, password, profile_pic})
         .then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
         })
         .catch(err => console.log(err));
      } else {
         alert('Please enter a password')
      }
   }

   render() { 
      return ( 
         <div className='Auth_Page'>
            <section className='Authentication_Box'>
               <img alt='Logo' src="https://robohash.org/UPU.png?set=set1&size=150x150"/>
               <h1>Helo</h1>
               <input 
                  onChange={e => this.handleInput(e)} 
                  placeholder='Username' 
                  name='username'
               />
               <input 
                  onChange={e => this.handleInput(e)} 
                  placeholder='Password' 
                  name='password' 
                  type='password'
               />
               <div className="Login_Box">
                  <button onClick={this.handleLogin}>Login</button>
                  <button onClick={this.handleRegister}>Register</button>
               </div>
            </section>
         </div>
       );
   }
}
 
export default connect(null, {getUser})(Auth);