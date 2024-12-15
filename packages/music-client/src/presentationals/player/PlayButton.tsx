import PlayIcon from '@/assets/icons/play_circle.svg?react';
import PauseIcon from '@/assets/icons/pause_circle.svg?react';

// presentational component, play와 pause같은 직접적인 상태는 관리 X
interface IPlayButton {
  status: AudioStatus;
  //   play: () => void;
  //   pause: () => void;
  onToggle: () => void;
}

export default function PlayButton({ status, onToggle }: IPlayButton) {
  return (
    <button onClick={onToggle}>
      {status === 'playing' ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}
