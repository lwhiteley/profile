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
          </Element>
        </div>
    );
  }
}

Body.defaultProps = {
};

export default Body;
