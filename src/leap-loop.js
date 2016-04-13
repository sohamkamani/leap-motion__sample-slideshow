import moveSlideCreator from './action-creators/moveslide';

export default ({dispatch, getState}) => {

   var controllerOptions = {enableGestures: true};

   const start = () => Leap.loop(controllerOptions, function(frame) {
     const {paused, slideshow : {slides}} = getState();

     if (paused) {
       return; // Skip this update
     }

     const currentGesture = frame.gestures[0];
     if (currentGesture && currentGesture.type === 'swipe'){
       const moveSlides = moveSlideCreator(slides);
       if(currentGesture.direction[0] < 0){
         dispatch(moveSlides.left());
       }
       else{
         dispatch(moveSlides.right());
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
