import { FC, SVGProps } from 'react';

type PropsType = SVGProps<SVGSVGElement>;

const DashIcon: FC<PropsType> = (props) => {
  return (
    <svg
      width='20'
      height='2'
      viewBox='0 0 20 2'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        width='20'
        height='1'
        transform='translate(0 0.5)'
        fill='white'
        fillOpacity='0.4'
      />
    </svg>
  );
};

export default DashIcon;
