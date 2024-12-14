import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useGetSongs from './hooks/useGetSongs';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TempComponent />
    </QueryClientProvider>
  );
}

function TempComponent() {
  const { data } = useGetSongs();

  return (
    <div>
      <h1 className='text-2xl text-red-300'>
        {data ? JSON.stringify(data) : 'Loading...'}
      </h1>
    </div>
  );
}

export default App;
