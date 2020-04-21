import React from 'react';

const Song = (props) => {

  return(
    <div>
      <h2>{props.position}</h2>
      <h3>{props.title}</h3>
      <h4>by {props.artist}</h4>
    </div>
  )
}

export default Song;