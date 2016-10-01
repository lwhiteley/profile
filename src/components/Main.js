require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
var {FaGithub, FaLinkedinSquare, FaTwitterSquare} = require('react-icons/lib/fa');
import NpmIcon from './NpmIcon.js';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (

      <div className="index">
        <header className="header" >
          <div className="content">
            <div className="notice">
              <div>
                  <img className="img-tile" src="https://i.imgur.com/ELo6oFh.jpg" />
              </div>
              <div className="profiles">
                <a className="icon-link" target="_blank" href="https://github.com/lwhiteley">
                  <FaGithub className="icon" />
                </a>
                <a className="icon-link" target="_blank" href="https://jm.linkedin.com/in/layton-whiteley-25284541">
                  <FaLinkedinSquare className="icon" />
                </a>
                <a className="icon-link" target="_blank" href="https://twitter.com/LaytonGates">
                  <FaTwitterSquare className="icon" />
                </a>
                <a className="icon-link" target="_blank" href="https://npmjs.com/~lwhiteley">
                  <NpmIcon className="icon npm-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="background-overlay"></div>
        </header>

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
