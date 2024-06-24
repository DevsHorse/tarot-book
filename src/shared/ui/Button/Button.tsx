import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import cs from 'classnames';
import styles from './Button.module.css';

const variants = {
  white: styles.buttonWhite,
  accent: styles.buttonAccent,
};

type PropsType = {
  variant?: 'accent' | 'white';
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsType> = ({ variant, children, className, ...props }) => {
  return (
    <button
      type='button'
      className={cs(styles.root, className, variants[variant || 'accent'])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
