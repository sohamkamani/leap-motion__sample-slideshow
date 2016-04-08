import {indexOf} from 'lodash';

const pauseActions = ['SLIDE_MOVING_LEFT','SLIDE_MOVING_RIGHT'];
const unpauseActions = ['UNPAUSE', 'SLIDESHOW_TRANSITION_DONE'];

export default (state = false, action) => {
  const {type, reachedLimit} = action;
  if(indexOf(pauseActions, type) >= 0 && !reachedLimit){
    return true;
  }
  if(indexOf(unpauseActions, type) >= 0){
    return false;
  }
  return state;
};
