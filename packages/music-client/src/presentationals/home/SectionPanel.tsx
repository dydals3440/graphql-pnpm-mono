import Section from '../common/Section';
import SongCard from '../common/SongCard';

interface ISectionPanel {
  songs: Song[];
  title: string;
  moreLink: string;
}

export default function SectionPanel({
  songs,
  title,
  moreLink,
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
        <div className='flex gap-x-18'>
          {songs?.map((song) => (
            // 카드 사이즈가 줄어듬
            // song card의, 너비가 parents에 맞게 구성이되면서, 카드 자체가 줄어듬. 카드 영역에 shrink-0 추가. 카드 컴포넌트가 줄어들지 않도록 함.
            <SongCard key={song.id} variant='vertical' className='shrink-0'>
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
      </Section.Content>
    </Section>
  );
}
