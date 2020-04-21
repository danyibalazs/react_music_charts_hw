import React, {Component} from 'react';
import SongList from '../components/SongList';

class SongContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    songs: []
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState(
      {
        songs: data.feed.entry
      }
    ))
  }

  render(){
    return(
      <div>
        <h1>UK Top 20 Chart</h1>
        <SongList songs={this.state.songs}></SongList>
      </div>
    )
  }
}

export default SongContainer;