import React, { Component } from 'react';
import {TextField} from "material-ui";

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: ''};
  }

  render() {
    return (
        <div className="search-bar">
          <div style={{position: 'relative'}}>
            <img className="search-icon" src="src/assets/ico-playlist-v4.png"/>
            <TextField
                className="search-field"
                style={{width: '92%'}}
                hintText="Search here"
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
          </div>
        </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
