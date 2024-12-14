import { graphql, HttpResponse } from 'msw';
// 도메인별로 작성하는 경우도 큼. (규모가 커질 수록 도메인에 대한 분리하도록 하면, 유지보수하기 쉬움)
export const handlers = [
  graphql.query('GetSongs', () => {
    // return HttpResponse.json({
    //   data: {
    //     songs: [
    //       {
    //         id: 1,
    //         title: 'Song 1',
    //         artist: 'Artist 1',
    //         genre: 'rock',
    //       },
    //     ],
    //   },
    // });
    return HttpResponse.json({
      errors: [
        {
          message: 'internal server error',
        },
      ],
    });
  }),
];
