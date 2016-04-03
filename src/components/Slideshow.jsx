import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Slide from './Slide.jsx';
import findSlideIndex from '../utils/find-slide-index';
import transitionEvent from '../utils/css-transition';

const stateToProps = state => {
  return {
    slideshow : state.slideshow.slides,
    slideWidth : state.slideshow.slideWidth
  };
};

const dispatchToProps = dispatch => {
  return {
    transitionDone : () => dispatch({
      type : 'SLIDESHOW_TRANSITION_DONE'
    })
  };
};

const Slideshow = React.createClass({
  propTypes : {
    slideshow : PropTypes.array.isRequired,
    slideWidth : PropTypes.number
  },
  componentDidMount () {
    const transitionDone = this.props.transitionDone;
    this.refs.slideshow.addEventListener(transitionEvent, transitionDone);
  },
  render () {
    const props = this.props;
    const activeSlide = findSlideIndex(props.slideshow);
    const style = {
      position : 'relative',
      left : (-(activeSlide * props.slideWidth)) + '%'
    };
    return (
      <div className="app__slideshow" style={style} ref="slideshow">
        {props.slideshow.map((slide, i) => <Slide {...slide} slideWidth={props.slideWidth + '%'} key={i} />)}
      </div>
    );
  }
});

export default connect(stateToProps, dispatchToProps)(Slideshow);
