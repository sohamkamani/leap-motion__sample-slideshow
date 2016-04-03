'use strict';
import React from 'react';
import Slideshow from './components/Slideshow.jsx';

const slideshow = [
  {
    title : 't1',
    description : 'lorem ipsum'
  },
  {
    title : 't2',
    description : 'lorem ipsum'
  },
  {
    title : 't3',
    description : 'lorem ipsum'
  },
  {
    title : 't4',
    description : 'lorem ipsum'
  }
];

let App = React.createClass({
  render : function(){
    return (
      <div>
        My App
        <Slideshow slideshow={slideshow} activeSlide={2} slideWidth={50} />
      </div>
    );
  }
});

module.exports = App;
