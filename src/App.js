import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header>
            <NavMenu user="@kaique_munhoz" />
        </Header>
        <div className="container">
            <Dashboard>
                <Widget>
                    <form className="newTweet">
                        <div className="newTweet__editorArea">  
                            <span className="newTweet__status">0/140</span>
                            <textarea className="newTweet__editor" placeholder="What's happening?"></textarea>
                        </div>
                        <button type="submit" className="newTweet__send">Tweet</button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard position="center">
                <Widget>
                    <div className="tweetsArea">
                        <Tweet />
                    </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;
