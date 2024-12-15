export const formatTime = (seconds: number) => {
  console.log(seconds);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60); // seconds 기준으로 나머지를 계산

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};
