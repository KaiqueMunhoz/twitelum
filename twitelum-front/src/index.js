import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

// CSS Global
import './assets/css/reset.css'
import './assets/css/container.css'
import './assets/css/btn.css'
import './assets/css/icon.css'
import './assets/css/iconHeart.css'
import './assets/css/notification.css'
import './assets/css/newTweet.css'

//I Don't know yet what this import do.
import registerServiceWorker from './registerServiceWorker';

//Routes
ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>, document.getElementById('root'));

//This do something.
registerServiceWorker();
