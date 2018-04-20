export const getTweets = () => {
  return (dispatch) => {
    fetch(`http://localhost:3001/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`)
    .then(response => response.json())
    .then((tweets) => {
      dispatch({type: 'CARREGA_TWEETS', tweets});
    })
  }
}