import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useGetSongs from './hooks/useGetSongs';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './presentationals/common/ErrorFallback';
import RootLayout from './presentationals/common/RootLayout';
import PlayerWrapper from './presentationals/player/PlayerWrapper';
import SongCard from './presentationals/common/SongCard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TempComponent />
        </ErrorBoundary>
      </RootLayout>
      <PlayerWrapper />
    </QueryClientProvider>
  );
}

function TempComponent() {
  const { data } = useGetSongs();

  return (
    <div className='flex gap-x-20'>
      {data?.map((song) => (
        <SongCard key={song.id} variant='vertical'>
          <SongCard.Image
            src={'https://via.placeholder.com/150'}
            alt={song.title}
          />
          <SongCard.Content>
            <SongCard.Title>{song.title}</SongCard.Title>
            <SongCard.Description>{song.artist}</SongCard.Description>
          </SongCard.Content>
        </SongCard>
      ))}
    </div>
  );
}

export default App;
