import {indexOf} from 'lodash';

const pauseActions = ['SLIDE_MOVING_LEFT','SLIDE_MOVING_RIGHT'];
export default (state = false, action) => {
  const {type} = action;
  if(indexOf(pauseActions, type) >= 0){
    return true;
  }
  if(type === 'SLIDESHOW_TRANSITION_DONE'){
    return false;
  }
  return state;
};
