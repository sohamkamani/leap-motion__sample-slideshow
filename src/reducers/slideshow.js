import {
  combineReducers
} from 'redux';
import findSlideIndex from '../utils/find-slide-index';

const defaultSlideshow = {
  slides: [{
    title: 't1',
    description: 'lorem ipsum',
    img : 'india.jpg',
    active : true
  }, {
    title: 't2',
    description: 'lorem ipsum',
    img : 'paris.jpg'

  }, {
    title: 't3',
    description: 'lorem ipsum',
    img : 'berlin.jpg'
  }, {
    title: 't4',
    description: 'lorem ipsum',
    img : 'brazil.jpg'
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
