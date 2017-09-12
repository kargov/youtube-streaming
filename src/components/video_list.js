import React from 'react';
import {GridList, Subheader} from "material-ui";
import {List} from 'material-ui/List';
import VideoListItem from "./video_item";

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}/>
        );
    });
    return (
        <div>
            <GridList className="grid-list">
                {videoItems}
            </GridList>
        </div>
    );
};

export default VideoList;
