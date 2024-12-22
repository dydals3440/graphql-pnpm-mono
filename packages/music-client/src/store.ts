import { create } from 'zustand';

interface AppState {
  // 현재 재생되는 곡이 없을 떄 null
  currentSong: Song | null;
  // sidebar가 열려있는지 여부
  isPlayListExpanded: boolean;
  // playlist 관리
  playList: Song[];
  // 좋아요
  likedSongs: Song[];
  //
  playLists: {
    id: number;
    name: string;
    songs: Song[];
  }[];
}

interface Action {
  setCurrentSong: (song: Song) => void;
  togglePlayList: () => void;
  addToPlayList: (song: Song) => void;
  removeFromPlayList: (song: Song) => void;
  setPlayList: (songs: Song[]) => void;
  likeSong: (song: Song) => void;
  unlikeSong: (song: Song) => void;
  // 노래에 대한 이름으로 플레이리스트 설정
  addPlayList: (song: Song) => void;
  addSongToPlayList: (id: number, song: Song) => void;
}

export const useAppStore = create<AppState & Action>()((set) => ({
  // state
  currentSong: null,
  isPlayListExpanded: false,
  playList: [],
  likedSongs: [],
  playLists: [],
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
  setPlayList: (songs: Song[]) => set({ playList: songs }),
  likeSong: (song: Song) =>
    set((state) => ({ likedSongs: [...state.likedSongs, song] })),
  unlikeSong: (song: Song) =>
    set((state) => ({
      likedSongs: state.likedSongs.filter((s) => s.id !== song.id),
    })),
  addPlayList: (song: Song) =>
    set((state) => ({
      playLists: [
        ...state.playLists,
        { id: state.playLists.length + 1, name: song.title, songs: [song] },
      ],
    })),
  addSongToPlayList: (id: number, song: Song) =>
    set((state) => ({
      playLists: state.playLists.map((playList) =>
        playList.id === id
          ? { ...playList, songs: [...playList.songs, song] }
          : playList
      ),
    })),
}));
