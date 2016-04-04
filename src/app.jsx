'use strict';
import React from 'react';
import Slideshow from './components/Slideshow.jsx';
import TriggerButton from './components/TriggerButton.jsx';
import Header from './components/Header.jsx';
import Team from './components/Team.jsx';

let App = React.createClass({
  render : function(){
    return (
      <div>
        <Header />
        <div className="app__slideshow__container">
          <Slideshow />
        </div>
        <TriggerButton />
        <Team />
        {/*<LeapPopup />*/}
      </div>
    );
  }
});

module.exports = App;
