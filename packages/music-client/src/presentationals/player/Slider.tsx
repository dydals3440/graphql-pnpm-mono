import { InputHTMLAttributes } from 'react';

export default function Slider({
  min,
  max,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input type='range' min={min} max={max} {...props} />;
}
