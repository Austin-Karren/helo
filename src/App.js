import React, { Component } from 'react';
// import Auth from './Components/Auth/Auth';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Form from './Components/Form/Form';
// import Post from './Components/Post/Post';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import {withRouter} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div className="App">
        {this.props.location.pathname === '/'
        ?<>
          {routes}
        </>
        :<>
          <Nav />
          {routes}
        </>}
      </div>
     );
  }
}
 
export default withRouter(App);