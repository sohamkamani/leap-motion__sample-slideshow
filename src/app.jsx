'use strict';
import React from 'react';
import Slideshow from './components/Slideshow.jsx';
import TriggerButton from './components/TriggerButton.jsx';

let App = React.createClass({
  render : function(){
    return (
      <div>
        My App
        <Slideshow />
        <TriggerButton />
      </div>
    );
  }
});

module.exports = App;
