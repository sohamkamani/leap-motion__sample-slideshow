import React from 'react';
import {connect} from 'react-redux';
import moveSlide from '../action-creators/moveslide';

const stateToProps = state => {
  return {
    slides : state.slideshow.slides
  };
};

const dispatchToProps = dispatch => {
  return {
    moveLeft : slides => () => dispatch(moveSlide(slides).left()),
    moveRight : slides => () => dispatch(moveSlide(slides).right()),
    enhanceSlideToggle : () => dispatch({type: 'SLIDE_ENHANCE_TOGGLE'})
  };
};

const TriggerButton = ({slides, moveLeft, moveRight, enhanceSlideToggle}) => {
  return (
    <div className="app__slide--buttongroup">
      <button className="app__slide--button" onClick={moveLeft(slides)}>Left</button>
      <button className="app__slide--button" onClick={moveRight(slides)}>Right</button>
      <button className="app__slide--button" onClick={enhanceSlideToggle}>Toggle Desc</button>
    </div>
  );
};

export default connect(stateToProps, dispatchToProps)(TriggerButton);
