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

import { frameToTimeString, timeToString } from "@/utils/time";

const PlayNavigation = () => {
  const [playing, setPlaying] = useState(false);
 // const { setState, duration, fps, scale, playerRef, activeIds } = useStore();
//  const { setState, duration, playerRef } = useStore();
 const { playerRef, fps, duration } = useStore();

 const [isMuted, setIsMuted] = useState(false);

 const muteSound = () => {
  setIsMuted(true);
  playerRef?.current?.setVolume(0);
 }

  const unmuteSound = () => {
  setIsMuted(false);
  playerRef?.current?.setVolume(100 / 100);
 }


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
    console.log("Player began playing");
    // dispatch("playback:2");
  };

  const handlePause = () => {
    dispatch(PLAYER_PAUSE);
   // setPlaying(false);
  };

  // const PlayerBackRateChange = (var) => {
//    playerRef?.current?.dispatchRateChange(var);
// }

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
    playerRef?.current?.seekTo(currentFrame - 450);
  }

  const moveForward15Sec = () => {
    playerRef?.current?.seekTo(currentFrame + 450);
  }

const percentage_video = Math.floor(((currentFrame / fps) / (duration / 1000)) * 100);

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

<>
<div className='bg-black bg-opacity-50'>
<div className='mr-5 ml-5 pr-5'>


<div className="visible sm:invisible bottom-[25%] fixed flex h-1 w-full ">
  <progress value={percentage_video} max="100" className="h-full w-[90%]" />
</div>



</div>

{/* <div className='visible sm:invisible bottom-[23%] fixed flex w-full'>
  <div className=" ml-5 mr-5 w-full bg-black rounded-full h-[4px] mb-4 dark:bg-black">
                <div className={`bg-[#FF6D03] h-[4px] rounded-full dark:bg-[#FF6D03] w-[${percentage_video}%]`} >
                </div>
              </div>
</div> */}
  



 <div className="visible sm:invisible bottom-[20%] fixed flex w-full justify-between items-center bg-black bg-opacity-50 text-[#B4B7B5] font-bold pl-5 pr-5">

 <div>
 {frameToTimeString({ frame: currentFrame }, { fps })}
 &nbsp; { Math.floor(((currentFrame / fps) / (duration / 1000)) * 100) }%
 </div>

<div>
 {timeToString({ time: duration })}
 {duration / 1000}
</div>
  

</div>

<div className={"visible sm:invisible bottom-7 fixed flex text-center w-full pl-[27%] bg-black bg-opacity-50"}>

     

  
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
         <span onClick={moveForward15Sec} className={"cursor-pointer"}>
        {/* <ForwardIcon /> */}
      <img src={ForwardIcon} alt="" />
        {/* <ForwardIcon /> */}
        </span>

        {
          isMuted ? (
<span onClick={unmuteSound} className={"cursor-pointer flex items-center pl-8"}>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
</svg>


        </span>
          ) : (
<span onClick={muteSound} className={"cursor-pointer flex items-center pl-8"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
  <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
</svg>

        </span>
          )
        }

        
        
       
        
       {/* <span className={""}>
       <MaximiseIcon
       onClick={maximise}
       />
       </span> */}


        </div> 

        </div>
</>
    

  );
};



export default PlayNavigation;
