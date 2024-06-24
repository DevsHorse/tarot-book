import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './ContentContainer.module.css';
import cs from 'classnames';

type PropsType = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

const ContentContainer: FC<PropsType> = ({ className, children }) => {
  return <div className={cs(styles.root, className)}>{children}</div>;
};

export default ContentContainer;
