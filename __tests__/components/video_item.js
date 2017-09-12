import React from 'react';
import {mount} from "enzyme";
import {MuiThemeProvider} from "material-ui";
import VideoListItem from "../../src/components/video_item";

test('VideoList test', () => {
    const video = {etag:"1",snippet:{title:"test video 1",thumbnails:{high:{url:"test1"}}}};

    const doneChange = jest.fn();

    const videoList =  mount(
        <MuiThemeProvider>
            <VideoListItem onVideoSelect={doneChange}
                           key={video.etag}
                           video={video}/>
        </MuiThemeProvider>
    );

    const item = videoList.find('.listItem');
    item.simulate('click');
    expect(doneChange).toBeCalledWith(video);
});