import CanvasTimeline, {
  ITimelineScaleState,
  ITimelineScrollState,
  ITrack,
  ITrackItem,
  ITransition
} from "@designcombo/timeline";
import { PlayerRef } from "@remotion/player";
import { create } from "zustand";

interface ITimelineStore {
  duration: number;
  fps: number;
  scale: ITimelineScaleState;
  scroll: ITimelineScrollState;

  tracks: ITrack[];
  trackItemIds: string[];
  transitionIds: string[];
  transitionsMap: Record<string, ITransition>;
  trackItemsMap: Record<string, ITrackItem>;
  activeIds: string[];
  timeline: CanvasTimeline | null;
  setTimeline: (timeline: CanvasTimeline) => void;
  setScale: (scale: ITimelineScaleState) => void;
  setScroll: (scroll: ITimelineScrollState) => void;
  playerRef: React.RefObject<PlayerRef> | null;
  setPlayerRef: (playerRef: React.RefObject<PlayerRef> | null) => void;

  setState: (state: any) => Promise<void>;

  isPlayNavigationShown: boolean;
  setIsPlayNavigationShown: (state: boolean) => void;

  isVideoPlaying: boolean;
  setIsVideoPlaying: (state: boolean) => void;

  isAudioMuted: boolean;
  setIsAudioMuted: (state: boolean) => void;

}

const useStore = create<ITimelineStore>((set) => ({
  isPlayNavigationShown: false,
  isVideoPlaying: false,
  isAudioMuted: false,
  timeline: null,
  duration: 5000,
  fps: 30,
  scale: {
    unit: 60,
    zoom: 1 / 90,
    segments: 5
  },
  scroll: {
    left: 0,
    top: 0
  },
  playerRef: null,

  activeIds: [],
  targetIds: [],
  tracks: [],
  trackItemIds: [],
  transitionIds: [],
  transitionsMap: {},
  trackItemsMap: {},

  setIsPlayNavigationShown: (new_playnavigation: boolean) =>
    set(() => ({
      isPlayNavigationShown: new_playnavigation
    })),

    setIsVideoPlaying: (new_videoplaying: boolean) =>
    set(() => ({
      isVideoPlaying: new_videoplaying
    })),

      setIsAudioMuted: (new_audiomuted: boolean) =>
    set(() => ({
      isAudioMuted: new_audiomuted
    })),

  setTimeline: (timeline: CanvasTimeline) =>
    set(() => ({
      timeline: timeline
    })),
  setScale: (scale: ITimelineScaleState) =>
    set(() => ({
      scale: scale
    })),
  setScroll: (scroll: ITimelineScrollState) =>
    set(() => ({
      scroll: scroll
    })),
  setState: async (state) => {
    return set({ ...state });
  },
  setPlayerRef: (playerRef: React.RefObject<PlayerRef> | null) =>
    set({ playerRef })
}));

export default useStore;
