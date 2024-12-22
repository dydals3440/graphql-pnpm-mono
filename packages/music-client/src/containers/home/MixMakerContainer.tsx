import useMixMakers from '@/hooks/useGetMixMakers';
import MixMakerPanel from './MixMakerPanel';
import { useAppStore } from '@/store';

export default function MixMakerContainer() {
  const { data } = useMixMakers();
  const { addToPlayList } = useAppStore();

  console.log(data);

  return data ? (
    <MixMakerPanel
      mixMakers={data.mixMakers}
      title='패캠을 위한 믹스메이커'
      onItemClick={addToPlayList}
    />
  ) : null;
}
