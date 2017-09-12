import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from  './components/video_detail';
import {MuiThemeProvider} from "material-ui";
import VideoList from "./components/video_list";
import Header from "./components/header";
import Footer from "./components/footer";
const API_KEY = 'PLEASE ADD YOUR API KEY';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null,
      term:''
    };
    this.videoSearch('zipcar co');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
        term: videos[0].snippet.title
      });
    });
  }

  videoSelect(video) {
      this.setState({
          videos: videos,
          selectedVideo: videos[0],
          term: videos[0].snippet.title
      });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
        <MuiThemeProvider>
                <div className="main_container">
                    <Header/>
                        <SearchBar onSearchTermChange={videoSearch}/>
                        <VideoDetail video={this.state.selectedVideo}/>
                        <VideoList onVideoSelect={selectedVideo => this.videoSearch(selectedVideo.snippet.title)} videos={this.state.videos} />
                    <Footer/>
            </div>
        </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
