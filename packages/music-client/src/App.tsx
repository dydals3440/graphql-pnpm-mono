import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useGetSongs from './hooks/useGetSongs';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './presentationals/common/ErrorFallback';
import RootLayout from './presentationals/common/RootLayout';
import PlayerWrapper from './presentationals/player/PlayerWrapper';
import SliderPanel from './presentationals/common/SliderPanel';
import { useState } from 'react';
import SectionPanel from './presentationals/home/SectionPanel';
import AudioContainer from './containers/player/AudioContainer';

const queryClient = new QueryClient();

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TempComponent />
        </ErrorBoundary>
        <button onClick={handleOpen}>Open</button>
        <SliderPanel open={open} onClose={handleClose}>
          <div className='w-[300px]'>재생목록</div>
        </SliderPanel>
      </RootLayout>
      <PlayerWrapper>
        <AudioContainer src='/audio/audio.mp3' />
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
