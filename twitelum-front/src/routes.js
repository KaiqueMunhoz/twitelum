import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

const Routes = () =>  {

  return(
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/login' component={LoginPage}/>
    </Switch>
  );
}

export default Routes;