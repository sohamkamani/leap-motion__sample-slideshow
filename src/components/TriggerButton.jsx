import React from 'react';
import {connect} from 'react-redux';

const TriggerButton = ({dispatch}) => {
  return (
    <button onClick={()=> dispatch({type : 'SLIDE_MOVING_LEFT'})} />
  );
};

export default connect()(TriggerButton);
