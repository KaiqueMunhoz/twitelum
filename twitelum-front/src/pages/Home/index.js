import React, { Component, Fragment } from 'react';
import Header from '../../components/Header'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'

class Home extends Component {

  constructor(){
    super();
    this.state = {
      hasAtLeastOneTweet: false,
      tweet : '',
      tweets : []
    }
    this.addTweet = this.addTweet.bind(this);
  }
  
  addTweet(event) {
    event.preventDefault();

    const tweet = this.state.tweet;
    const tweets = this.state.tweets;
    if(tweet){
      this.setState({
        tweets : [tweet, ...tweets],
        tweet : '',
        hasAtLeastOneTweet: true
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
                    <form className="newTweet" onSubmit={ this.addTweet } >
                        <div className="newTweet__editorArea">  
                            <span className={
                              `newTweet__status ${this.state.tweet.length < 140 ? '': 'newTweet__status--invalid' }`
                              }>
                            {this.state.tweet.length < 140 ? this.state.tweet.length : '140'}/140</span>
                            <textarea className="newTweet__editor" 
                            value={ this.state.tweet }
                            onInput={ (event) => this.setState({ tweet: event.target.value }) }
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
                { this.state.hasAtLeastOneTweet ? 
                  <Widget>
                      <div className="tweetsArea">
                      {
                        this.state.tweets.map((tweet, index) => {
                          return <Tweet text={tweet} key={tweet + index}/>
                        })
                      }
                      </div>
                  </Widget> : 
                  <Widget>
                    <div className="notificationWithoutTweets">Make your first tweet</div>
                  </Widget>              
                }
                
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default Home;
