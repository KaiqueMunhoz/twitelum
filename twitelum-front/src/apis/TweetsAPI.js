export const getTweets = () => {
  return (dispatch) => {
    fetch(`http://localhost:3001/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`)
      .then(response => response.json())
      .then((tweets) => {
        dispatch({ type: 'GET_TWEETS', tweets });
      })
  }
}

export const addTweet = (newTweet) => {
  return (dispatch) => {
    if (newTweet) {
      fetch(`http://localhost:3001/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`, {
        method: 'POST',
        body: JSON.stringify({ conteudo: newTweet })
      })
        .then((response) => {
          return response.json();
        })
        .then((newTweetServer) => {
          dispatch({ type: 'ADD_TWEET', newTweet: newTweetServer })
        });
    }
  }
}

export const removeTweet = (idTweet) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/tweets/${idTweet}?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(response => {
      dispatch({ type: 'REMOVE_TWEET', idTweet });
      dispatch({ type: 'REMOVE_TWEET_ACTIVATED'});

      dispatch({ type: 'ADD_NOTIFICATION', notification: 'Tweet removed with success'})
      setTimeout(() => {
        dispatch({ type: 'REMOVE_NOTIFICATION'});
      }, 5000);
    })
  }
}

export const like = (idTweet) => {
  return (dispatch) => {
    dispatch({ type: 'LIKE', idTweet })
  }
}