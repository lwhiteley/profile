
import React from 'react';
var {FaGithub, FaLinkedinSquare, FaTwitterSquare, FaAngleDown} = require('react-icons/lib/fa');
import NpmIcon from './NpmIcon.js';
import {Link} from 'react-scroll';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <header className="header" >
          <div className="content">
            <div className="notice">

              <div>
                  <img className="img-tile" src="https://i.imgur.com/ELo6oFh.jpg" />
              </div>
              <h1>
                Layton Whiteley
              </h1>
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

                <a className="icon-link cv-link" target="_blank" href="resume.pdf">
                  CV
                </a>

              </div>
            </div>
          </div>

          <div className="arrow">
            <Link className="icon-link" to="body" spy={true} smooth={true} duration={500}>
              <FaAngleDown className="icon"></FaAngleDown>
            </Link>
          </div>

          <div className="background-overlay"></div>
        </header>
    );
  }
}

Header.defaultProps = {
};

export default Header;
