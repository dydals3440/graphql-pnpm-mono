import { graphql, http, HttpResponse, passthrough } from 'msw';
// 도메인별로 작성하는 경우도 큼. (규모가 커질 수록 도메인에 대한 분리하도록 하면, 유지보수하기 쉬움)
export const handlers = [
  graphql.query('GetSongs', () => {
    return HttpResponse.json<{ data: { songs: Song[] } }>({
      data: {
        songs: [
          {
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
          },
          {
            id: 2,
            title: 'Song 2',
            album: {
              id: 2,
              title: 'Album 2',
              artist: { id: 2, name: 'Artist 2' },
              thumbnail: 'https://picsum.photos/200',
            },
            genres: [{ id: 2, name: 'pop' }],
            path: 'http://localhost:4000/audio/audio.mp3',
          },
          {
            id: 3,
            title: 'Song 3',
            album: {
              id: 3,
              title: 'Album 3',
              artist: { id: 3, name: 'Artist 3' },
              thumbnail: 'https://picsum.photos/200',
            },
            genres: [{ id: 3, name: 'hiphop' }],
            path: 'http://localhost:4000/audio/audio.mp3',
          },
          {
            id: 4,
            title: 'Song 4',
            album: {
              id: 4,
              title: 'Album 4',
              artist: { id: 4, name: 'Artist 4' },
              thumbnail: 'https://picsum.photos/200',
            },
            genres: [{ id: 4, name: 'hiphop' }],
            path: 'http://localhost:4000/audio/audio.mp3',
          },
        ],
      },
    });
  }),
  http.get(/\/audio\/.*/, (req, res, ctx) => {
    return passthrough();
  }),
];
