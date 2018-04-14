import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

function isAuthenticated() { 
  return localStorage.getItem('TOKEN'); 
}

class PrivateRoute extends Component {

  render(){
    const Component = this.props.component;
    const props = this.props;

    if(isAuthenticated()){
      return (
        <Route render={() => <Component {...props} />}/>
      );
    }else {
      return(
        <Redirect to="/login" />
      );
    }
  };
}

const Routes = () =>  {

  return(
    <Switch>
      <PrivateRoute path='/' exact component={Home}/>
      <Route path='/login' component={LoginPage}/>
    </Switch>
  );
}

export default Routes;