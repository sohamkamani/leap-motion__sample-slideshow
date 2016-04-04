import React from 'react';
import {connect} from 'react-redux';

const TriggerButton = ({dispatch}) => {
  return (
    <div className="app__slide--buttongroup">
      <button className="app__slide--button" onClick={() => dispatch({type: 'SLIDE_MOVING_LEFT'})}>Left</button>
      <button className="app__slide--button" onClick={() => dispatch({type: 'SLIDE_MOVING_RIGHT'})}>Right</button>
      <button className="app__slide--button" onClick={() => dispatch({type: 'SLIDE_ENHANCE_TOGGLE'})}>Toggle Desc</button>
    </div>
  );
};

export default connect()(TriggerButton);
