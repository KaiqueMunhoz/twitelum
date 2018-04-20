import {connect} from 'react-redux';
import * as TweetAPI from '../apis/TweetsAPI';
import Tweet from '../components/Tweet';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch, propsReceived) => {
  return {
    removeHandler: () => {
      dispatch(TweetAPI.removeTweet(propsReceived.tweetInfo._id));
    }
  }
}

const TweetDefaultContainer = connect(mapStateToProps, mapDispatchToProps)(Tweet);

export default TweetDefaultContainer;