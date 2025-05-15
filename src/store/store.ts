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

  setTracks: (tracks: ITrack[]) => void;
  setTrackItemIds: (trackItemIds: string[]) => void;
  setTrackItemsMap: (trackItemsMap: Record<string, ITrackItem>) => void;
  setActiveIds: (activeIds: string[]) => void;

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

  // lesson data
  totalPages: number;
  setTotalPages: (state: number) => void;

  currentPage: number;
  setCurrentPage: (state: number) => void;

  lessonTitle: string;
  setLessonTitle: (state: string) => void;

  pageContentItems: any[];
  setPageContentItems: (state: any[]) => void;

  lessonData: any;
  setLessonData: (state: any) => void;


}

const useStore = create<ITimelineStore>((set) => ({
  lessonData: {},
  totalPages: 0,
  currentPage: 1,
  lessonTitle: "",
  pageContentItems: [],
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



   setTracks: (state: ITrack[]) =>
    set(() => ({
      tracks: state
    })),

     setTrackItemIds: (state: string[]) =>
    set(() => ({
      trackItemIds: state
    })),

     setActiveIds: (state: string[]) =>
    set(() => ({
      activeIds: state
    })),

    setTrackItemsMap: (state: Record<string, ITrackItem>) =>
    set(() => ({
      trackItemsMap: state
    })),

 setLessonData: (state: any) =>
    set(() => ({
      lessonData: state
    })),

   setPageContentItems: (state: any[]) =>
    set(() => ({
      pageContentItems: state
    })),

  setLessonTitle: (state: string) =>
    set(() => ({
      lessonTitle: state
    })),

setTotalPages: (state: number) =>
    set(() => ({
      totalPages: state
    })),

setCurrentPage: (state: number) =>
    set(() => ({
      currentPage: state
    })),
  

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
