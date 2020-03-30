import React, { Component } from 'react';

export default class About extends Component {
  render() {
    const centered = { margin: '0 auto' };
    return (
      <div>
        <h1>About Us</h1>
        <div className="ui two column stackable grid container">
          <div className="column">
            <p>Profile Picture </p>
          </div>
          <div className="column">
            <p>
              A Software Developer graduated from Coding Bootcamp. Proficient
              with HTML, CSS and JavaScript including with cutting edge web
              frameworks. Strong problem-solving skills. Strong communication
              skills both verbal and writing.
            </p>
          </div>
        </div>
        <div className="ui three column stackable grid container">
          <div className="column">
            <div className="ui card">
              <i class="big code icon" style={centered}></i>
              <div className="header" style={centered}>
                <h2>Frontend</h2>
              </div>
              <div className="ui middle aligned animated list">
                <div className="item">
                  <i class="play icon"></i>HTML/CSS/Javascript
                </div>
                <div className="item">
                  <i class="play icon"></i>React/Redux
                </div>
                <div className="item">
                  <i class="play icon"></i>Webpack
                </div>
                <div className="item">
                  <i class="play icon"></i>Figma/Adobe XD
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui card">
              <i class="big server icon" style={centered}></i>
              <div className="header" style={centered}>
                <h2>Backend</h2>
              </div>
              <div className="ui middle aligned animated list">
                <div className="item">
                  <i class="play icon"></i>Node.js
                </div>
                <div className="item">
                  <i class="play icon"></i>MySQL/PostgreSQL
                </div>
                <div className="item">
                  <i class="play icon"></i>MongoDB
                </div>
                <div className="item">
                  <i class="play icon"></i>Neo4j
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui card">
              <i class="big sitemap icon" style={centered}></i>
              <div className="header" style={centered}>
                <h2>DevOps</h2>
              </div>
              <div className="ui middle aligned animated list">
                <div className="item">
                  <i class="play icon"></i>Doker/Kubernetes
                </div>
                <div className="item">
                  <i class="play icon"></i>CI/CD
                </div>
                <div className="item">
                  <i class="play icon"></i>Amazon Web Services
                </div>
                <div className="item">
                  <i class="play icon"></i>Google Cloud Platform
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
