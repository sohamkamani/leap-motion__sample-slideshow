import {
  combineReducers
} from 'redux';
import findSlideIndex from '../utils/find-slide-index';

const defaultSlideshow = {
  slides: [{
    title: 't1',
    description: 'lorem ipsum'
  }, {
    title: 't2',
    description: 'lorem ipsum'
  }, {
    title: 't3',
    description: 'lorem ipsum'
  }, {
    title: 't4',
    description: 'lorem ipsum'
  }],

  slideWidth: 50,
  activeSlide: 0
};

const activateSlide = (slides, index) => {
  const activeIndex = index < 0 ? 0 : index >= slides.length ? slides.length - 1 : index;
  return slides.map((slide, i) => {
    if(i === activeIndex){
      return Object.assign({}, slide, {
        active : true
      });
    }
    return Object.assign({}, slide, {
      active : false
    });
  });
};

const slides = (state = defaultSlideshow.slides, action) => {
  const currentActiveIndex = findSlideIndex(state);
  switch (action.type) {
  case 'SLIDE_MOVING_LEFT':
    return activateSlide(state, currentActiveIndex + 1);
  case 'SLIDE_MOVING_RIGHT':
    return activateSlide(state, currentActiveIndex - 1);
  default:
    return state;
  }
};

const slideWidth = () => 50;

export default combineReducers({
  slides,
  slideWidth
});
