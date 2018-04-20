import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function tweetsReducer(state = [], action = {}) {
  
  if(action.type === 'CARREGA_TWEETS') {
    return action.tweets;
  }
  return state;
}

const store = createStore(
  tweetsReducer,
  applyMiddleware(thunk)
);

export default store;