import React from 'react';
import Song from './Song';

const SongList = ({songs}) => {

  const songNodes = songs.map((song, index) => {
    const position = index + 1;
    const title = song["im:name"].label;
    const artist = song["im:artist"].label;
    const imageUrl = song["im:image"][2].label;
     return <Song 
      position={position}
      title={title}
      artist={artist}
      imageUrl={imageUrl}
      key={index}
      />
  })

  return (
    <div>
      {songNodes}
    </div>
  )
}

export default SongList;