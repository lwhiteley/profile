require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Element} from 'react-scroll';

class Body extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="body">
          <Element name="body" className="body-content">
            <h1>
              About me
            </h1>

            <p className="">
              Layton is a full stack Software Developer with a three (3) year background in
              Agile Software Development. Core competencies include user experience and server-side
              software development as well as excellent communication and time management skills.
              Please see my profiles above for more information and projects I have contributed to.
            </p>
          </Element>
        </div>
    );
  }
}

Body.defaultProps = {
};

export default Body;
