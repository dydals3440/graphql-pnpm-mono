type Cn<T = unknown> = T & { className?: string };

type AudioStatus = 'playing' | 'paused' | 'stopped';

interface Tag {
  id: number;
  name: string;
}

interface Song {
  id: number;
  title: string;
  album: Omit<Album, 'songs'>;
  genres: Genre[];
  path: string;
  tags: Tag[];
}

interface Genre {
  id: number;
  name: string;
}

interface Album {
  id: number;
  title: string;
  artist: Omit<Artist, 'albums'>;
  songs: Song[];
  thumbnail: string;
}

interface Artist {
  id: number;
  name: string;
  albums: Omit<Album, 'artist'>[];
}

interface PlayList {
  id: number;
  name: string;
  songs: Song[];
}

interface MixMaker {
  id: number;
  name: string;
  description: string;
  songs: Song[];
}
