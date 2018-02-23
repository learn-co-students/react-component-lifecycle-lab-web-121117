import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount = () => {
    this.setState({
      tweets: this.props.newTweets
    })
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate = () => {
    return this.props.newTweets.length > 0
  }
  // TODO: componentWillReceiveProps()

  componentWillReceiveProps = (nextProps) => {
    // console.dir(newTweets)
    this.setState({
      tweets: nextProps.newTweets.concat(this.state.tweets)
    })
  }

  render() {
    // console.dir(this.state.tweets)
    // debugger
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
