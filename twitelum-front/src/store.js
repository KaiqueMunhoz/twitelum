import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function tweetsReducer(state = {list : [], tweetActivated: {} }, action = {}) {
  
  if(action.type === 'GET_TWEETS') {
    return {
      ...state,
      list: action.tweets
    }
  }
  if(action.type === 'ADD_TWEET') {
    return {
      ...state,
      list: [action.newTweet, ...state.list]
    }
      
  }
  if(action.type === 'REMOVE_TWEET') {
    const listUpdated =  state.list.filter(tweet => tweet._id !== action.idTweet);
    return {
      ...state,
      list: listUpdated
    }
  }
  if(action.type === 'ADD_TWEET_ACTIVATED') {
    return {
      ...state,
      tweetActivated: action.tweetActivated
    }
  }
  if(action.type === 'REMOVE_TWEET_ACTIVATED') {
    return {
      ...state,
      tweetActivated: {}
    }
  }

  return state;
}

const store = createStore(
  tweetsReducer,
  applyMiddleware(thunk)
);

export default store;