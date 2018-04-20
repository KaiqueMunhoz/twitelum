import React, { Component, Fragment } from 'react';
import Header from '../../components/Header'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'
import Modal from '../../components/Modal'
import PropTypes from 'prop-types'
import * as TweetsAPI from '../../apis/TweetsAPI'

class Home extends Component {

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.state = {
      tweet: '',
      tweets: [],
      tweetActivated: {}
    }
    this.addTweet = this.addTweet.bind(this);

  }

  componentDidMount() {
    this.context.store.dispatch(TweetsAPI.getTweets());
  }

  componentWillMount() {
    this.context.store.subscribe(() => {
      this.setState({
        tweets: this.context.store.getState()
      })
    })
  }

  addTweet(event) {
    event.preventDefault();
    this.context.store.dispatch(TweetsAPI.addTweet(this.state.tweet));
    this.setState({
      tweet: ''
    });
  }

removeTweet(idTweet) {

  fetch(`http://localhost:3001/tweets/${idTweet}?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(response => {
      const listWithoutTweet = this.state.tweets.filter(tweet => tweet._id !== idTweet);
      this.setState({
        tweets: listWithoutTweet,
        tweetActivated: {}
      });
    })
}

openModal = (event, idTweet) => {
  const isTweetFooter = event.target.closest('.tweet__footer');
  if (isTweetFooter) {
    return;
  }
  const tweetSelected = this.state.tweets.find(tweet => tweet._id === idTweet);
  this.setState({
    tweetActivated: tweetSelected
  });
}

closeModal = (event) => {

  const isModal = event.target.closest('.widget');
  if (!isModal) {
    this.setState({
      tweetActivated: {}
    });
  }
}

render() {
  return (
    <Fragment>
      <Header>
        <NavMenu user="@kaique_munhoz" />
      </Header>
      <div className="container">
        <Dashboard>
          <Widget>
            <form className="newTweet" onSubmit={this.addTweet} >
              <div className="newTweet__editorArea">
                <span className={
                  `newTweet__status ${this.state.tweet.length < 140 ? '' : 'newTweet__status--invalid'}`
                }>
                  {this.state.tweet.length < 140 ? this.state.tweet.length : '140'}/140</span>
                <textarea className="newTweet__editor"
                  value={this.state.tweet}
                  onInput={(event) => this.setState({ tweet: event.target.value })}
                  placeholder="What's happening?"></textarea>
              </div>
              <button disabled={this.state.tweet.length < 140 ? false : true}
                type="submit" className="newTweet__send">Tweet</button>
            </form>
          </Widget>
          <Widget>
            <TrendsArea />
          </Widget>
        </Dashboard>
        <Dashboard position="center">
          <Widget>
            <div className="tweetsArea">
              {
                this.state.tweets.map((tweet) => {
                  return <Tweet
                    text={tweet.conteudo}
                    key={tweet._id}
                    tweetInfo={tweet}
                    openModalHandler={(event) => this.openModal(event, tweet._id)}
                    removeHandler={() => this.removeTweet(tweet._id)} />
                })
              }
            </div>
          </Widget>
        </Dashboard>
      </div>

      <Modal closeModal={this.closeModal} isOpen={!!this.state.tweetActivated._id}>
        <Widget>
          <Tweet
            tweetInModal={true}
            removeHandler={() => this.removeTweet(this.state.tweetActivated._id)}
            text={this.state.tweetActivated.conteudo || ''}
            tweetInfo={this.state.tweetActivated} />
        </Widget>
      </Modal>

    </Fragment>
  );
}
}

export default Home;
