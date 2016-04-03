import {combineReducers} from 'redux';

const defaultSlideshow = {
  slides : [
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
  ],

  slideWidth : 50,
  activeSlide : 0
};

const slides = () => defaultSlideshow.slides;

const slideWidth = () => 50;

const activeSlide = (state = 0, action) => {
  const speed = 0.1;
  if(state < 0){
    return 0;
  }
  switch (action.type) {
    case 'SLIDE_MOVING_LEFT':
      return state += speed;
    case 'SLIDE_MOVING_RIGHT':
      return state -= speed;
    default:
      return state;
  }
};

export default combineReducers({
  slides,
  slideWidth,
  activeSlide
});
