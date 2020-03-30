import React, { Component } from 'react';

export default class Map extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <div className="ui relaxed list">
          <div className="item">
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <a href="https://github.com/xeusteerapat" target="_blank">
                Github profile
              </a>
            </div>
          </div>
          <div className="item">
            <i className="large facebook middle aligned icon"></i>
            <div className="content">
              <a
                href="https://www.facebook.com/xeusteerapat.prommarak"
                target="_blank"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="item">
            <i className="large twitter middle aligned icon"></i>
            <div className="content">
              <a href="https://twitter.com/xeusteerapat" target="_blank">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
