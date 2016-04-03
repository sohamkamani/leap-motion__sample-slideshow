import {findIndex} from 'lodash';

export default (slides) => {
  const index = findIndex(slides, slide => (slide.active === true));
  return (!index || index < 0) ? 0 : index;
};
