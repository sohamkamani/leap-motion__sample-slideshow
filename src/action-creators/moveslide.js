import findSlideIndex from '../utils/find-slide-index';

module.exports = slides => {
  const currentActiveIndex = findSlideIndex(slides);
  const slideLength = slides.length;

  const left = () => {
    return {
      type: 'SLIDE_MOVING_LEFT',
      currentActiveIndex,
      reachedLimit : currentActiveIndex >= (slideLength - 1)
    };
  };

  const right = () => {
    return {
      type: 'SLIDE_MOVING_RIGHT',
      currentActiveIndex,
      reachedLimit : currentActiveIndex <= 0
    };
  };

  return {
    left,
    right
  };
};
