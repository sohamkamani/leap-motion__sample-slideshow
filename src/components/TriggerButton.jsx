import React from 'react';
import {connect} from 'react-redux';

const TriggerButton = ({dispatch}) => {
  return (
    <div>
      <button onClick={() => dispatch({type: 'SLIDE_MOVING_LEFT'})}>left</button>
      <button onClick={() => dispatch({type: 'SLIDE_MOVING_RIGHT'})}>right</button>
      <button onClick={() => dispatch({type: 'SLIDE_ENHANCE_TOGGLE'})}>enhance toggle</button>
    </div>
  );
};

export default connect()(TriggerButton);
