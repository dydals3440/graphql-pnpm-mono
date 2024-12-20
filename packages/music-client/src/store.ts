import { create } from 'zustand';

interface AppState {
  // 현재 재생되는 곡이 없을 떄 null
  currentSong: Song | null;
  // sidebar가 열려있는지 여부
  isPlayListExpanded: boolean;
  // playlist 관리
  playList: Song[];
}

interface Action {
  setCurrentSong: (song: Song) => void;
  togglePlayList: () => void;
  addToPlayList: (song: Song) => void;
  removeFromPlayList: (song: Song) => void;
}

export const useAppStore = create<AppState & Action>()((set) => ({
  // state
  currentSong: null,
  isPlayListExpanded: false,
  playList: [],
  // actions
  setCurrentSong: (song: Song) => set({ currentSong: song }),
  togglePlayList: () =>
    set((state) => ({ isPlayListExpanded: !state.isPlayListExpanded })),
  addToPlayList: (song: Song) =>
    set((state) => ({ playList: [...state.playList, song] })),
  removeFromPlayList: (song: Song) =>
    set((state) => ({
      playList: state.playList.filter((s) => s.id !== song.id),
    })),
}));
