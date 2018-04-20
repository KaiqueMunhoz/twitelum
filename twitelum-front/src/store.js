import { createStore, applyMiddleware, combineReducers } from 'redux';
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
  if(action.type === 'LIKE') {
    state.list.map((currentTweet) => {

      if(currentTweet._id === action.idTweet) {
          const { likeado, totalLikes } = currentTweet;
          currentTweet.likeado = !likeado;
          currentTweet.totalLikes = likeado ? totalLikes - 1 : totalLikes + 1;
      }

      return currentTweet;
    });
  }

  return state;
}

function notificationReducer(state = '', action={}) {
  if(action.type === 'ADD_NOTIFICATION') {
    return action.notification;
  }
  if(action.type === 'REMOVE_NOTIFICATION') {
    return  '';
  }
  return state;
}

const store = createStore(
  combineReducers({
    tweetsReducer: tweets,
    notificationReducer: notification,
    applyMiddleware(thunk)
  })
);

export default store;