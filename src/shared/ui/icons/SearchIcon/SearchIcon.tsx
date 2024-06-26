import { FC, SVGProps } from 'react';

type PropsType = SVGProps<SVGSVGElement>;

const SearchIcon: FC<PropsType> = (props) => {
  return (
    <svg
      width='19'
      height='18'
      viewBox='0 0 19 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M13.4478 12.9459C14.7117 11.6795 15.4933 9.93104 15.4933 8C15.4933 4.13401 12.3608 1 8.49664 1C4.6325 1 1.5 4.13401 1.5 8C1.5 11.866 4.6325 15 8.49664 15C10.4307 15 12.1814 14.2149 13.4478 12.9459ZM13.4478 12.9459L17.5 17'
        stroke='#06110F'
        strokeOpacity='0.35'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default SearchIcon;
