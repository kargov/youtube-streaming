import React from 'react';
import {Card, CardMedia, CardText, CardTitle} from "material-ui";

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
        <Card>
            <CardMedia>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url} ></iframe>
                </div>
            </CardMedia>
            <CardTitle className="videoTitle" title={video.snippet.title}/>
            <CardText className="description">
                {video.snippet.description}
            </CardText>
        </Card>
    </div>
  );
};

export default VideoDetail;
