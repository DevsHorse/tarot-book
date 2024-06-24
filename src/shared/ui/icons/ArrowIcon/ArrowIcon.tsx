import { FC, SVGProps } from 'react';

type PropsType = SVGProps<SVGSVGElement>;

const ArrowIcon: FC<PropsType> = (props) => {
  return (
    <svg
      width='22'
      height='20'
      viewBox='0 0 22 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 2L2 10M2 10L10 18M2 10H20'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowIcon;
