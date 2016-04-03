import React, { PropTypes } from 'react';
import Slide from './Slide.jsx';

const Slideshow = React.createClass({
  propTypes : {
    slideshow : PropTypes.array.isRequired,
    activeSlide : PropTypes.number.isRequired,
    slideWidth : PropTypes.number
  },
  render () {
    const props = this.props;
    const style = {
      position : 'relative',
      left : (-(props.activeSlide * props.slideWidth)) + '%'
    };
    return (
      <div className="app__slideshow" style={style}>
        {props.slideshow.map((slide, i) => <Slide {...slide} slideWidth={props.slideWidth + '%'} key={i} />)}
      </div>
    );
  }
});

export default Slideshow;
