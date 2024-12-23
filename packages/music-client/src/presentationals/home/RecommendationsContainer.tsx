import useGetRecommendations from '@/hooks/useGetRecommendations';
import { useAppStore } from '@/store';
import SectionPanel from './SectionPanel';

export default function RecommendationsContainer() {
  const { playList, addToPlayList } = useAppStore();
  const tags = playList
    .map((song) => [
      ...song.genres.map((genre) => genre.name),
      ...(song.tags?.map((tag) => tag.name) ?? []),
    ])
    .flat();
  const { data } = useGetRecommendations(tags);

  return (
    data && (
      <SectionPanel
        songs={data}
        moreLink='/'
        title='패캠을 위한 추천'
        onItemClick={(song) => addToPlayList([song])}
      />
    )
  );
}
