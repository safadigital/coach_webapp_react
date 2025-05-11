// import PlayIcon from './play.svg';
// import PreviousIcon from './previous.svg';
// import NextIcon from './next.svg';
// import RefreshIcon from './refresh.svg';
// import RefreshForwardIcon from './refreshForward.svg';
// import MaximiseIcon from './maximise.svg';
// import PauseIcon from './pause.svg';

 import BackwardIcon from '../../assets/Backward.svg';
import ForwardIcon from '../../assets/Forward.svg';

// import styles from './PlayNavigation.module.css';

// import { Button } from "../components/ui/button";
import {
  // ACTIVE_SPLIT,
  // LAYER_CLONE,
  // LAYER_DELETE,
  PLAYER_PAUSE,
  PLAYER_PLAY,
//   TIMELINE_SCALE_CHANGED,
//  DRAG_START,
//  DRAG_END,
//  PLAYER_SEEK,
//  PLAYER_TOGGLE_PLAY,
  dispatch,
} from "@designcombo/events";
// import { frameToTimeString, getCurrentTime, timeToString } from "@/utils/time";
import useStore from "@/store/store";
// import { SquareSplitHorizontal, Trash, ZoomIn, ZoomOut } from "lucide-react";
// import {
//   getFitZoomLevel,
//   getNextZoomLevel,
//   getPreviousZoomLevel,
//   getZoomByIndex,
// } from "../utils/timeline";
import { useCurrentPlayerFrame } from "@/hooks/use-current-frame";

import { useEffect, useState } from "react";
// import useUpdateAnsestors from "@/hooks/use-update-unsestors";
// mport { ITimelineScaleState } from "@designcombo/types";

const PlayNavigation = () => {
  const [playing, setPlaying] = useState(false);
 // const { setState, duration, fps, scale, playerRef, activeIds } = useStore();
//  const { setState, duration, playerRef } = useStore();
 const { playerRef } = useStore();
  // const theState = useStore.getState();

 // useUpdateAnsestors({ playing, playerRef });

  const currentFrame = useCurrentPlayerFrame(playerRef!);

  // const doActiveDelete = () => {
  //   dispatch(LAYER_DELETE);
  // };

  // const doActiveSplit = () => {
  //   dispatch(ACTIVE_SPLIT, {
  //     payload: {},
  //     options: {
  //       time: getCurrentTime(),
  //     },
  //   });
  // };

//   const changeScale = (scale: ITimelineScaleState) => {
//     dispatch(TIMELINE_SCALE_CHANGED, {
//       payload: {
//         scale,
//       },
//     });
//   };

  const handlePlay = () => {
    dispatch(PLAYER_PLAY);
    console.log("Player began playing")
    // setPlaying(true);
  };

  const handlePause = () => {
    dispatch(PLAYER_PAUSE);
   // setPlaying(false);
  };

  // const maximise = () => {
  //   playerRef?.current?.requestFullscreen();
  //   setState({ playerControls: true })
    
  // }

  // const returnToStart = () => {
   
  //  playerRef?.current?.seekTo(0);
  // }

  // const moveToEnd = () => {
  // playerRef?.current?.seekTo(duration);
  // }

  const moveBack15Sec = () => {
    playerRef?.current?.seekTo(currentFrame - 150);
  }

  const moveForward15Sec = () => {
    playerRef?.current?.seekTo(currentFrame + 150);
  }



  useEffect(() => {
    playerRef?.current?.addEventListener("play", () => {
      setPlaying(true);
    });
    playerRef?.current?.addEventListener("pause", () => {
      setPlaying(false);
    });
    return () => {
      playerRef?.current?.removeEventListener("play", () => {
        setPlaying(true);
      });
      playerRef?.current?.removeEventListener("pause", () => {
        setPlaying(false);
      });
    };
  }, [playerRef]);

  return (


     <div className={"visible sm:invisible bottom-7 fixed flex text-center w-full pl-[27%]"}>

  
         {/* <svg
         onClick={handlePlay}
         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text=[#000]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
</svg> */}


         <span onClick={moveBack15Sec} className={"cursor-pointer"}>
          <img src={BackwardIcon} alt="" />
         {/* <BackwardIcon /> */}
         </span>
         <span
          onClick={() => {
            if (playing) {
                   return handlePause();
                 }
               handlePlay();
             }}
         className={""}>

          {  
            playing ? (
              

<span className='cursor-pointer'>

{/* <svg 
onClick={handlePlay}
xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> */}


{/* <svg 
onClick={handlePlay}
xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 bg-[#fff] rounded-[50px] text-black p-3 font-bold">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg> */}


<svg 
onClick={handlePlay}
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16 bg-[#fff] rounded-[50px] text-black p-3 font-bold">
  <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
</svg>


</span>

             
            
            ) : (
              
<span className='cursor-pointer'>
 
  {/* <svg
         onClick={handlePause}
         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 bg-[#fff] rounded-[50px] text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
</svg> */}



<svg 
 onClick={handlePause}
xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 bg-[#fff] rounded-[50px] text-black p-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>

</span>



               

            ) 
}

       
         </span>
         <span  onClick={moveForward15Sec} className={"cursor-pointer"}>
        {/* <ForwardIcon /> */}
      <img src={ForwardIcon} alt="" />
        {/* <ForwardIcon /> */}
        </span>
        
       
        
       {/* <span className={""}>
       <MaximiseIcon
       onClick={maximise}
       />
       </span> */}


        </div> 

    


  );
};



export default PlayNavigation;
