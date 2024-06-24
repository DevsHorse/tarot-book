import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';
import cs from 'classnames';

type PropsType = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<PropsType> = ({ className, ...props }) => {
  return <input className={cs(styles.root, className)} {...props} />;
};

export default Input;
