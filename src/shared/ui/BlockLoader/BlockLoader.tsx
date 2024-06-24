import { FC, HTMLAttributes } from 'react';
import styles from './BlockLoader.module.css';
import cs from 'classnames';

type PropsType = HTMLAttributes<HTMLDivElement>;

const BlockLoader: FC<PropsType> = ({ className, ...props }) => {
  return <div className={cs(styles.root, className)} {...props} />;
};

export default BlockLoader;
