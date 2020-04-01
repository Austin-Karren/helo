import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/userReducer';

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         search: '',
         checkbox: true,
         user_id: NaN
       }
   }

   componentDidMount(){
      console.log(this.props)
   }

   handleInput = (input) => {
      this.setState({
         [input.target.name]: input.target.value
      })
   }

   render() { 
      console.log(this.props);
      return ( 
         <div className='Dashboard'>
            <h1>{this.props.store.username}</h1>
            <section className="Dashboard_Filter" alt='Dashboard filter'>
               <div>
                  <input 
                     name='search'
                     placeholder='Search by Title'
                     onChange={e => this.handleInput(e)}
                  />
                  <button>search</button>
                  <button>Reset</button>
               </div>
               <div className='Search_Box'>
                  <p>My Posts</p>
                  <input 
                     type='checkbox'
                     value={this.state.checkbox}
                  />
               </div>
            </section>
            <section className='Post_Container'>
               User posts
            </section>
         </div>
       );
   }
}

const mapStateToProps = reduxState => {
   console.log(reduxState)
   const {id, username, profile_pic} = reduxState.users
   return {store: {id, username, profile_pic}}
}
 
export default connect(mapStateToProps, {getUser})(Dashboard);