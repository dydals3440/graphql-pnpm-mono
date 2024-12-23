import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useGetSongs from './hooks/useGetSongs';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './presentationals/common/ErrorFallback';
import RootLayout from './presentationals/common/RootLayout';
import PlayerWrapper from './presentationals/player/PlayerWrapper';
import SliderPanel from './presentationals/common/SliderPanel';
import { useEffect } from 'react';
import SectionPanel from './presentationals/home/SectionPanel';
import AudioContainer from './containers/player/AudioContainer';

import { useAppStore } from './store';
import PlayListContainer from './containers/home/PlayListContainer';
import MixMakerContainer from './containers/home/MixMakerContainer';
import RecommendationsContainer from './presentationals/home/RecommendationsContainer';

const queryClient = new QueryClient();

function App() {
  const { currentSong, isPlayListExpanded } = useAppStore();

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TempComponent />
          <MixMakerContainer />
          <RecommendationsContainer />
        </ErrorBoundary>
        <SliderPanel open={isPlayListExpanded}>
          <PlayListContainer />
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
  const { addToPlayList } = useAppStore();

  return (
    <SectionPanel
      songs={data ?? []}
      moreLink='/'
      title='패캠을 위한 믹스 & 추천'
      onItemClick={(song) => addToPlayList([song])}
    />
  );
}

export default App;
