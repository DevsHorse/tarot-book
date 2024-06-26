import { FC, SVGProps } from 'react';

type PropsType = SVGProps<SVGSVGElement>;

const BurgerIcon: FC<PropsType> = (props) => {
  return (
    <svg
      width='20'
      height='12'
      viewBox='0 0 20 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0 0.995193C0 0.445563 0.445563 0 0.995193 0H9.00481C9.55444 0 10 0.445563 10 0.995193C10 1.54482 9.55444 1.99039 9.00481 1.99039H0.995194C0.445564 1.99039 0 1.54482 0 0.995193Z'
        fill='white'
      />
      <path
        d='M0 5.99976C0 5.45013 0.445563 5.00456 0.995193 5.00456H19.0048C19.5544 5.00456 20 5.45013 20 5.99976C20 6.54939 19.5544 6.99495 19.0048 6.99495H0.995194C0.445564 6.99495 0 6.54939 0 5.99976Z'
        fill='white'
      />
      <path
        d='M0.995193 10.0096C0.445563 10.0096 0 10.4552 0 11.0048C0 11.5544 0.445564 12 0.995194 12H13.0048C13.5544 12 14 11.5544 14 11.0048C14 10.4552 13.5544 10.0096 13.0048 10.0096H0.995193Z'
        fill='white'
      />
    </svg>
  );
};

export default BurgerIcon;
