import React from 'react';
import VideoList from "../../src/components/video_list";
import {mount} from "enzyme";
import {MuiThemeProvider} from "material-ui";

test('VideoList test', () => {
    const videos = [
        {etag:"1",snippet:{title:"test video 1",thumbnails:{high:{url:"test1"}}}},
    ];

    const doneChange = jest.fn();

    const videoList =  mount(
        <MuiThemeProvider>
            <VideoList videos={videos}  onVideoSelect={doneChange}/>
        </MuiThemeProvider>
    );

    const item = videoList.find('.listItem');
    item.simulate('click');
    expect(doneChange).toBeCalledWith(videos[0]);
});