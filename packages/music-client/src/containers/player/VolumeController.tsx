import VolumeIcon from '@/assets/icons/volume.svg?react';
import Slider from './Slider';
import { ChangeEvent } from 'react';

interface IVolumeController {
  volume: number;
  onChange: (volume: number) => void;
}

export default function VolumeController({
  volume,
  onChange,
}: IVolumeController) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.currentTarget.value);
    onChange(v);
  };
  return (
    <div className='flex gap-x-6 items-center w-96'>
      <VolumeIcon />
      <Slider
        min={0}
        max={1}
        onChange={handleChange}
        step={0.01}
        value={volume}
      />
    </div>
  );
}
