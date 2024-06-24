import { FC, SVGProps } from 'react';

type PropsType = SVGProps<SVGSVGElement>;

const DoneIcon: FC<PropsType> = (props) => {
  return (
    <svg
      width='13'
      height='8'
      viewBox='0 0 13 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.05566 3.86965L5.16678 6.8611L10.9446 1.30554'
        stroke='white'
        strokeWidth='2.22222'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default DoneIcon;
