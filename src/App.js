import React, { Component } from 'react';
import Home from './components/Home'
import AppNavbar from './components/AppNavbar';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import Users from './components/users/Users';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() { 
    
    return ( 
      <Router>
        <div className="App">
          <AppNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/add" component={AddUser} />
            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route exact path="/users/:id" component={Users} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </Router>
     );
  }
}

export default App;
 
