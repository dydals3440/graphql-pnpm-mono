import { gql } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from '@/graphqlClient';

const GET_SONGS = gql`
  query GetSongs {
    songs {
      id
      title
      album {
        artist {
          id
          name
        }
        id
        title
        thumbnail
      }
      genres
    }
  }
`;

export default function useGetSongs() {
  return useQuery({
    queryKey: ['songs'],
    queryFn: async () => {
      const data = await graphqlClient.request<{
        songs: {
          id: number;
          title: string;
          artist: string;
          genre: string;
        }[];
      }>(GET_SONGS);

      return data.songs;
    },
    // tanstack query state 기반동작, 에러가 발생했을때도, state가 변경되면서, 컴포넌트가 리렌더링, 이 떄 에러가 던져지면서, 에러바운더리에서 해당 에러를 캐치할 수 있다.
    // 에러 바운더리에서는, 비동기 로직에 대한 에러를 캐치 못하지만, state로 관리되기때문에 쿼리는 캐치할 수 있다.
    throwOnError: true,
  });
}
