import { FC, SVGProps } from 'react';

type PropsType = SVGProps<SVGSVGElement>;

const ArrowRightIcon: FC<PropsType> = (props) => {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 16.5L14 12.5L10 8.5'
        stroke='white'
        strokeWidth='2.13333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowRightIcon;
