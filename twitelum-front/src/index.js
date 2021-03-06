import React from 'react';
import ReactDOM from 'react-dom';


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
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

//Redux
import { Provider } from 'react-redux'
import store from './store'

//Routes
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
  </Provider>
  , document.getElementById('root'));


registerServiceWorker();