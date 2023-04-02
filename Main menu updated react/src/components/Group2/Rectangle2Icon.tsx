import { memo, SVGProps } from 'react';

const Rectangle2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 405 93' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H405V93H0V0Z' fill='white' />
  </svg>
);
const Memo = memo(Rectangle2Icon);
export { Memo as Rectangle2Icon };