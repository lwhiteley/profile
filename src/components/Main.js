require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Body from './Body.js';
import Header from './Header.js';

class AppComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="index">
        <Header />
        <Body />
      </div>
    );
  }

}

AppComponent.defaultProps = {
};

export default AppComponent;
