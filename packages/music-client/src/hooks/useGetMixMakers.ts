import { gql } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from '@/graphqlClient';

const GET_MIX_MAKERS = gql`
  query GetSongs {
    mixMakers {
      id
      name
      description
      songs {
        id
        title
        album {
          id
          title
          artist {
            id
            name
          }
        }
      }
    }
  }
`;

export default function useMixMakers() {
  return useQuery({
    queryKey: ['mixMakers'],
    queryFn: async () => {
      const data = await graphqlClient.request<{
        mixMakers: MixMaker[];
      }>(GET_MIX_MAKERS);

      return data;
    },
    // tanstack query state 기반동작, 에러가 발생했을때도, state가 변경되면서, 컴포넌트가 리렌더링, 이 떄 에러가 던져지면서, 에러바운더리에서 해당 에러를 캐치할 수 있다.
    // 에러 바운더리에서는, 비동기 로직에 대한 에러를 캐치 못하지만, state로 관리되기때문에 쿼리는 캐치할 수 있다.
    throwOnError: true,
  });
}
