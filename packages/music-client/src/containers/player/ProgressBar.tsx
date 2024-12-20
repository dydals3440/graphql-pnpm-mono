import { formatTime } from '@/utils/player/time';
import { ChangeEvent } from 'react';
import Slider from './Slider';

interface IProgressBar {
  duration: number;
  currentTime: number;
  onChange: (seconds: number) => void;
}

export default function ProgressBar({
  duration,
  currentTime,
  onChange,
}: IProgressBar) {
  const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
    const seconds = Number(e.currentTarget.value);
    onChange(seconds);
  };

  return (
    <div className='flex items-center gap-x-17'>
      <span>{formatTime(currentTime)}</span>
      <Slider
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleChangeTime}
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
}
