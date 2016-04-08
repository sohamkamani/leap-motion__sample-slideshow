import findSlideIndex from './utils/find-slide-index';

export default ({dispatch, getState}) => {

   var controllerOptions = {enableGestures: true};

   const start = () => Leap.loop(controllerOptions, function(frame) {
     const {paused, slideshow : {slides}} = getState();

     if (paused) {
       const slideIndex = findSlideIndex(slides);
       if(slideIndex <= 0 || slideIndex >= slides.length){
         dispatch({type : 'UNPAUSE'});
       }
       return; // Skip this update
     }

     const currentGesture = frame.gestures[0];
     if (currentGesture && currentGesture.type === 'swipe'){
       if(currentGesture.direction[0] < 0){
         dispatch({type: 'SLIDE_MOVING_LEFT'});
       }
       else{
         dispatch({type: 'SLIDE_MOVING_RIGHT'});
       }
     }

     if(currentGesture && currentGesture.type === 'screenTap'){
       dispatch({type: 'SLIDE_ENHANCE_TOGGLE'});
     }
   });

   return {
     start
   };
 };
