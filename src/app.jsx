'use strict';
import React from 'react';
import Slideshow from './components/Slideshow.jsx';

let App = React.createClass({
  render : function(){
    return (
      <div>
        My App
        <Slideshow />
      </div>
    );
  }
});

module.exports = App;
