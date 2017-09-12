import React from 'react';
import {darkBlack, GridTile, IconButton} from "material-ui";


const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.high.url;
  return (
          <GridTile className="listItem"
              onClick={() => onVideoSelect(video)}
              key={imageUrl}
              title={video.snippet.title}>
            <img src={imageUrl} className="grid-item" />
          </GridTile>
  );
};

export default VideoListItem;
