import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <a href="http://www.zipcar.com/">
                    <img src={"src/assets/zipcar.png"} className="logo"/>
                </a>
                <h2 className="title">
                    Awesome YouTube Streaming Service
                </h2>
            </div>
        );
    }
}

export default Header;
