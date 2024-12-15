import { useEffect, useRef, useState } from 'react';

export default function useAudioPlayer() {
  const [status, setStatus] = useState<AudioStatus>('stopped');
  const audioRef = useRef<HTMLAudioElement>(null);
  // 현재 시간 관리
  const [currentTime, setCurrentTime] = useState(0);
  // 볼륨 관리
  const [volume, setVolume] = useState(1); // 0 ~ 1
  // 총 재생시간
  const [duration, setDuration] = useState(0);

  // 현재 시간을 업데이트
  useEffect(() => {
    const audio = audioRef.current;
    // 추가한 ref에 handler 추가
    if (!audio) return;

    const updateTime = () => {
      // audio가 있을떄만, 핸들러가 등록되기에 디폴트 값을 0 (사실 없을일없음)
      setCurrentTime(audio?.currentTime ?? 0);
    };

    const updateVolume = () => {
      setVolume(audio.volume);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    audioRef.current.addEventListener('timeupdate', updateTime);
    audio.addEventListener('volumechange', updateVolume);
    // meta데이터가 로드되었을때 실행되는 이벤트
    audio.addEventListener('loadedmetadata', updateDuration);
    // 해당 컴포넌트가 언마운트 될 떄
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('volumechange', updateVolume);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const play = () => {
    audioRef.current?.play();
    setStatus('playing');
  };

  const pause = () => {
    audioRef.current?.pause();
    setStatus('paused');
  };

  // 외부에서 현재 시간 수정
  const changeCurrentTime = (seconds: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = seconds;
  };

  const changeVolume = (volume: number) => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume;
  };

  return {
    audioRef,
    status,
    play,
    pause,
    duration,
    currentTime,
    volume,
    changeCurrentTime,
    changeVolume,
  };
}
