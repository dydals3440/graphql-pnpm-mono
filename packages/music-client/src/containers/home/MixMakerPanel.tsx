import Section from '@/presentationals/common/Section';
import SongCard from '@/presentationals/common/SongCard';

interface Props {
  title: string;
  mixMakers: MixMaker[];
  // song에 대한 정보가 그대로 넘어감
  onItemClick: (songs: Song[]) => void;
}

export default function MixMakerPanel({
  title,
  mixMakers,
  onItemClick,
}: Props) {
  return (
    <Section>
      <Section.Title className='flex justify-between'>
        <span>{title}</span>
      </Section.Title>
      <Section.Content>
        <div className='flex'>
          {mixMakers?.map((mixMaker) => (
            // 카드 사이즈가 줄어듬
            // song card의, 너비가 parents에 맞게 구성이되면서, 카드 자체가 줄어듬. 카드 영역에 shrink-0 추가. 카드 컴포넌트가 줄어들지 않도록 함.
            <SongCard
              onClick={() => onItemClick(mixMaker.songs)}
              key={mixMaker.id}
              variant='vertical'
              className='shrink-0'
            >
              <SongCard.Image
                src={`https://picsum.photos/id/1/200/300`}
                alt={mixMaker.name}
              />
              <SongCard.Content>
                <SongCard.Title>{mixMaker.name}</SongCard.Title>
                <SongCard.Description>{mixMaker.name}</SongCard.Description>
              </SongCard.Content>
            </SongCard>
          ))}
        </div>
      </Section.Content>
    </Section>
  );
}

// const getRandomThumbnail = () => {
//   const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

//   return thumbnails[Math.floor(Math.random() * thumbnails.length)];
// };
