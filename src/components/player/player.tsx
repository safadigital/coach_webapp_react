import { useEffect, useRef } from "react";
import Composition from "./composition";
import { Player as RemotionPlayer, PlayerRef } from "@remotion/player";
import useStore from "@/store/store";

const Player = () => {
  const playerRef = useRef<PlayerRef>(null);
  const { setPlayerRef, duration, fps, tracks, trackItemsMap } = useStore();

  console.log("TRACKS FROM STORE: ", tracks);
  console.log("TRACKS ITEMS MAP FROM STORE: ", trackItemsMap);


  useEffect(() => {
    setPlayerRef(playerRef);
  }, []);

  //  useEffect(() => {
  //   console.log("Rerendered!");
  //   console.log("FPS IS NOW: ", fps)
  // }, [])

  return (
    <RemotionPlayer
      ref={playerRef}
      component={Composition}
      durationInFrames={Math.round((duration / 1000) * fps) || 5 * 30}
      compositionWidth={828}
      compositionHeight={1792}
      style={{ width: "100%", height: "100%" }}
      inputProps={{}}
      fps={fps}
     
    />
  );
};
export default Player;
