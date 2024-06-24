import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styles from './GoBack.module.css';
import cs from 'classnames';
import { ArrowIcon } from '../../../icons/ArrowIcon';

type PropsType = {
  to: string;
} & HTMLAttributes<HTMLDivElement> &
  PropsWithChildren;

const GoBack: FC<PropsType> = ({ to, className, children, ...props }) => {
  return (
    <div className={cs(styles.root, className)} {...props}>
      <Link to={to}>
        <div className={styles.button}>
          <ArrowIcon />
        </div>
      </Link>
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default GoBack;
