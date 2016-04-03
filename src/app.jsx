'use strict';
import React from 'react';
import Slideshow from './components/Slideshow.jsx';
import TriggerButton from './components/TriggerButton.jsx';

let App = React.createClass({
  render : function(){
    return (
      <div>
        My App
        <div className="app__slideshow__container">
          <Slideshow />
        </div>
        <TriggerButton />
      </div>
    );
  }
});

module.exports = App;
