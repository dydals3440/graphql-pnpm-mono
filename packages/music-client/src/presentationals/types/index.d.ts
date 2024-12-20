type Cn<T = unknown> = T & { className?: string };

type AudioStatus = 'playing' | 'paused' | 'stopped';

interface Song {
  id: number;
  title: string;
  album: Omit<Album, 'songs'>;
  genres: Genre[];
  path: string;
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
