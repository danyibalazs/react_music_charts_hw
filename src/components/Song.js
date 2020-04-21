import React from 'react';
import './Song.css'

const Song = (props) => {

  return(
    <div className="song">
      <div className="position">
        <h2>{props.position}</h2>
      </div>
      <div className="details">
        <h3>{props.title}</h3>
        <h4>by {props.artist}</h4>
      </div> 
      <div>
        <img src={props.imageUrl}></img>
      </div>
    </div>
  )
}

export default Song;