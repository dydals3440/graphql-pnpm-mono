import Section from '../common/Section';
import SongCard from '../common/SongCard';

interface ISectionPanel {
  songs: Song[];
  title: string;
  moreLink: string;
  // onClick하면 패널을 클릭하는느낌이 남
  onItemClick: (song: Song) => void;
}

export default function SectionPanel({
  songs,
  title,
  moreLink,
  onItemClick,
}: ISectionPanel) {
  return (
    <Section>
      <Section.Title className='flex justify-between'>
        <span>{title}</span>
        <a className='text-gray-300 text-16 font-medium' href={moreLink}>
          All
        </a>
      </Section.Title>
      <Section.Content>
        <div className='flex'>
          {songs?.map((song) => (
            // 카드 사이즈가 줄어듬
            // song card의, 너비가 parents에 맞게 구성이되면서, 카드 자체가 줄어듬. 카드 영역에 shrink-0 추가. 카드 컴포넌트가 줄어들지 않도록 함.
            <SongCard
              onClick={() => onItemClick(song)}
              key={song.id}
              variant='vertical'
              className='shrink-0'
            >
              <SongCard.Image src={song.album.thumbnail} alt={song.title} />
              <SongCard.Content>
                <SongCard.Title>{song.title}</SongCard.Title>
                <SongCard.Description>
                  {song.album.artist.name}
                </SongCard.Description>
              </SongCard.Content>
            </SongCard>
          ))}
        </div>
      </Section.Content>
    </Section>
  );
}
