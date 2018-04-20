import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function tweetsReducer(state = [], action = {}) {
  
  if(action.type === 'GET_TWEETS') {
    return action.tweets;
  }
  if(action.type === 'ADD_TWEET') {
    return [action.newTweet, ...state]
  }
  if(action.type === 'REMOVE_TWEET') {
    return state.filter(tweet => tweet._id !== action.idTweet);
  }
  return state;
}

const store = createStore(
  tweetsReducer,
  applyMiddleware(thunk)
);

export default store;