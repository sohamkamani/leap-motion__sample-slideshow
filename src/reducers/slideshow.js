import {
  combineReducers
} from 'redux';
import findSlideIndex from '../utils/find-slide-index';

import defaultSlideshow from '../data/default-slideshow';

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

const enhanceSlideToggle = (slides) => slides.map(slide => slide.active ? Object.assign({}, slide, {enhanced : !slide.enhanced}) : slide);

const slides = (state = defaultSlideshow.slides, action) => {
  const currentActiveIndex = findSlideIndex(state);
  switch (action.type) {
  case 'SLIDE_MOVING_LEFT':
    return activateSlide(state, currentActiveIndex + 1);
  case 'SLIDE_MOVING_RIGHT':
    return activateSlide(state, currentActiveIndex - 1);
  case 'SLIDE_ENHANCE_TOGGLE':
    return enhanceSlideToggle(state);
  default:
    return state;
  }
};

const slideWidth = () => 70;

export default combineReducers({
  slides,
  slideWidth
});
