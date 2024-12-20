import PlayListItem from '@/presentationals/home/PlayListItem';
import { useAppStore } from '@/store';

export default function PlayListContainer() {
  const {
    playList,
    playLists,
    setCurrentSong,
    removeFromPlayList,
    addPlayList,
    addSongToPlayList,
    likeSong,
  } = useAppStore();
  return (
    <div className='flex flex-col h-full'>
      <h1 className='px-30 py-20 text-gray200 text-24 font-medium w-[522px]'>
        재생 목록
      </h1>
      <ul className='flex-1 flex flex-col'>
        {playList.length === 0 ? (
          <li className='flex items-center justify-center h-full'>
            재생 목록이 없습니다.
          </li>
        ) : (
          playList.map((song) => (
            <PlayListItem
              playlists={playLists}
              key={song.id}
              song={song}
              onClick={(song) => setCurrentSong(song)}
              onRemoveFromPlayList={(song) => removeFromPlayList(song)}
              onAddPlayList={(song) => addPlayList(song)}
              onAddSongToPlaylist={() => addSongToPlayList(song.id, song)}
              onLikeSong={(song) => likeSong(song)}
            />
          ))
        )}
      </ul>
    </div>
  );
}
