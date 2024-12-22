import { useState } from 'react';
import SongCard from '../common/SongCard';
import MenuIcon from '@/assets/icons/menu.svg?react';
import Menu from '@/containers/common/Menu';
import AddIcon from '@/assets/icons/add.svg?react';
import AddCircleIcon from '@/assets/icons/add_circle.svg?react';
import DeleteIcon from '@/assets/icons/delete.svg?react';

interface Props {
  song: Song;
  playlists: PlayList[];
  onClick: (song: Song) => void;
  onRemoveFromPlayList: (song: Song) => void;
  onAddPlayList: (song: Song) => void;
  onAddSongToPlaylist: (id: number, song: Song) => void;
  onLikeSong: (song: Song) => void;
}

export default function PlayListItem({
  song,
  playlists,
  onClick,
  onRemoveFromPlayList,
  onAddPlayList,
  onAddSongToPlaylist,
  onLikeSong,
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex relative' onClick={() => onClick(song)}>
      <SongCard variant='horizontal'>
        {/* Sementic 하게 버튼이라고, 보여줌 */}
        <button
          className='absolute top-10 right-17 z-10'
          onClick={() => setOpen((prev) => !prev)}
        >
          <MenuIcon />
        </button>
        {open && (
          <Menu
            className='absolute right-0 left-auto top-48'
            onClose={() => setOpen(false)}
          >
            <Menu.MenuItem
              label={
                <div className='flex'>
                  <AddIcon className='mr-6' />
                  <span className='ml-8'>플레이리스트에 추가하기</span>
                </div>
              }
              value='1'
            >
              <Menu.SubMenu>
                <Menu.MenuItem
                  label={
                    <div className='flex'>
                      <AddIcon className='mr-6' />
                      <span>새 플레이리스트</span>
                    </div>
                  }
                  value='sub1'
                  onSelect={() => onAddPlayList(song)}
                />
                {playlists.map((playlist) => (
                  <>
                    <Menu.MenuItem
                      label={playlist.name}
                      value={`${playlist.id}`}
                      onSelect={() => onAddSongToPlaylist(playlist.id, song)}
                    />
                  </>
                ))}
              </Menu.SubMenu>
            </Menu.MenuItem>
            <Menu.MenuItem
              label={
                <div className='flex'>
                  <AddCircleIcon className='mr-6' />
                  <span>좋아요 표시한 곡에 저장하기</span>
                </div>
              }
              value='2'
              onSelect={() => onLikeSong(song)}
            />
            <Menu.MenuItem
              label={
                <div className='flex'>
                  <DeleteIcon className='mr-6' />
                  <span>재생목록에서 삭제</span>
                </div>
              }
              value='3'
              onSelect={() => onRemoveFromPlayList(song)}
            />
          </Menu>
        )}
        <SongCard.Image src={song.album.thumbnail} alt={song.title} />
        <SongCard.Content>
          <SongCard.Title>{song.title}</SongCard.Title>
          <SongCard.Description>{song.album.artist.name}</SongCard.Description>
        </SongCard.Content>
      </SongCard>
    </div>
  );
}
