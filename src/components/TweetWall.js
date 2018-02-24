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
  // it thinks tweets are coming from this.state but it's actually coming from the props //done

  // TODO: shouldComponentUpdate() // not done
  // TODO: componentWillReceiveProps()

  componentWillMount(){
    this.setState({
      tweets: this.props.newTweets
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.newTweets > 0)
  }

  componentWillReceiveProps(nextProps){
    // to update the state to combine nextProps.newTweets and this.state.tweets with the new tweets at the beginning of the array
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
