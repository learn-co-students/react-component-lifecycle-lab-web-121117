import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return (this.props.newTweets !== nextProps.newTweets);
    // Use this lifecycle method in <TweetWall /> to only rerender the component if there are more than 0 new tweets
    return (nextProps.newTweets > 0)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
