import React, { Component } from 'react';

class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         search: '',
         checkbox: true
       }
   }

   handleInput = (input) => {
      this.setState({
         [input.target.name]: input.target.value
      })
   }

   render() { 
      return ( 
         <div className='Dashboard'>
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
 
export default Dashboard;