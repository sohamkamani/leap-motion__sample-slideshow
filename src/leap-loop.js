export default ({dispatch, getState}) => {

   var controllerOptions = {enableGestures: true};

   const start = () => Leap.loop(controllerOptions, function(frame) {
     const {paused} = getState();
     if (paused) {
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
