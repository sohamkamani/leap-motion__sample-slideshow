import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Slide from './Slide.jsx';

const stateToProps = state => {
  return {
    slideshow : state.slideshow.slides,
    activeSlide : state.slideshow.activeSlide,
    slideWidth : state.slideshow.slideWidth
  };
};

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

export default connect(stateToProps)(Slideshow);
