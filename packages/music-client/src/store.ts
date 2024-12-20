import { create } from 'zustand';

interface AppState {
  // 현재 재생되는 곡이 없을 떄 null
  currentSong: Song | null;
}

interface Action {
  setCurrentSong: (song: Song) => void;
}

export const useAppStore = create<AppState & Action>()((set, get) => ({
  // state
  currentSong: null,
  // actions
  setCurrentSong: (song: Song) => set({ currentSong: song }),
}));
