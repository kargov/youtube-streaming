import React from 'react';
import {mount} from "enzyme";
import {MuiThemeProvider} from "material-ui";
import VideoDetail from "../../src/components/video_detail";

test('VideoDetail test', () => {
    const video = {etag:"1", id:{videoId:"1"},snippet:{title:"test video 1",description:"description",thumbnails:{high:{url:"test1"}}}};

    const videoDetail =  mount(
        <MuiThemeProvider>
            <VideoDetail video={video}/>
        </MuiThemeProvider>
    );

    const title = videoDetail.find('.videoTitle');
    expect(title.text()).toBe('test video 1');
    const description = videoDetail.find('.description');
    expect(description.text()).toBe('description')
});