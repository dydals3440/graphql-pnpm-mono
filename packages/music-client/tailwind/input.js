import plugin from 'tailwindcss/plugin';

export const range = plugin(function ({ addComponents }) {
  // object 형태로 작성
  addComponents({
    "input[type='range']": {
      '-webkit-appearance': 'none',
      appearance: 'none',
      width: '100%',
      height: '4px',
      background: '#636366',
      borderRadius: '2px',
      outline: 'none',
      // 큰 height 인풋영역 넘어가는 모델은 hidden
      overflow: 'hidden',
    },
    // 인풋의 레인지 슬라이더의 동그라미 부분
    "input[type='range']::-webkit-slider-thumb": {
      '-webkit-appearance': 'none',
      appearance: 'none',
      width: '4px',
      height: '4px',
      background: '#fff',
      cursor: 'pointer',
      boxShadow: '-602px 0 0 600px #fff',
      borderRadius: '50%',
    },
  });
});
