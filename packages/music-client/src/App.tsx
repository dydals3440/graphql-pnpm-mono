import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useGetSongs from './hooks/useGetSongs';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './presentationals/common/ErrorFallback';
import RootLayout from './presentationals/common/RootLayout';
import PlayerWrapper from './presentationals/player/PlayerWrapper';
import SliderPanel from './presentationals/common/SliderPanel';
import { useEffect, useState } from 'react';
import SectionPanel from './presentationals/home/SectionPanel';
import AudioContainer from './containers/player/AudioContainer';

import { useAppStore } from './store';

const queryClient = new QueryClient();

function App() {
  const [open, setOpen] = useState(false);
  const { currentSong, setCurrentSong } = useAppStore();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // App이 로딩되었을 때 임시로 데이터를 더미로
  useEffect(() => {
    setCurrentSong({
      id: 1,
      title: 'Song 1',
      album: {
        id: 1,
        title: 'Album 1',
        artist: { id: 1, name: 'Artist 1' },
        thumbnail: 'https://picsum.photos/200',
      },
      genres: [{ id: 1, name: 'rock' }],
      path: 'http://localhost:4000/audio/audio.mp3',
    });
  }, [setCurrentSong]);

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <button onClick={handleOpen}>Open</button>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TempComponent />
        </ErrorBoundary>
        <SliderPanel open={open} onClose={handleClose}>
          <div className='w-[300px]'>
            <h1>재생 목록</h1>
          </div>
        </SliderPanel>
      </RootLayout>
      <PlayerWrapper>
        <AudioContainer src={currentSong?.path} />
      </PlayerWrapper>
    </QueryClientProvider>
  );
}

function TempComponent() {
  const { data } = useGetSongs();

  return (
    <SectionPanel
      songs={data ?? []}
      moreLink='/'
      title='패캠을 위한 믹스 & 추천'
    />
  );
}

export default App;
