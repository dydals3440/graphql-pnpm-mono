import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Artist {
    id: ID!
    name: String!
    albums: [Album!]!
  }
  type Album {
    id: ID!
    title: String!
    artist: Artist!
    song: [Song!]
  }
  type Song {
    id: ID!
    title: String!
    # 초기에 장르가 등록되어야 하므로, nullable 하지 않게 설정
    genres: [Genre!]!
    album: Album!
  }
  type Genre {
    id: ID!
    # nullable 되지않게 !를 붙여줌
    name: String!
  }
  # 데이터베이스에서 가져요는 부분을 Query로 정의
  type Query {
    genres: [Genre!]!
    # default 값으로 하기 위해 !로 표시
    artists: [Artist!]!
    # 특정 아티스트에 대해서, 갖고오는 케이스가 있을 것 같아, 아티스트쿼리 작성
    # id를 받아서, Artist를 리턴
    artist(id: ID!): Artist
    # 노래에 대한 리스트를 가져오도록 함.
    songs: [Song!]!
    albums: [Album!]!
  }
  # 서버에 데이터베이스를 변경해야 하는 부분을 Mutation으로 정의
  type Mutation {
    addGenre(name: String!): Genre!
    addArtist(name: String!): Artist!
    addSong(title: String!, albumId: ID!, genreIds: [ID!]!): Song!
    addAlbum(title: String!, artistId: ID!, releaseDate: String!): Album!
  }
`;
