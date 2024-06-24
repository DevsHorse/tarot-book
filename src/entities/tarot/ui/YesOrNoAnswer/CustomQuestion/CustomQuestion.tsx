import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './CustomQuestion.module.css';
import cs from 'classnames';

type PropsType = {
  title?: string;
} & HTMLAttributes<HTMLDivElement> &
  PropsWithChildren;

const CustomQuestion: FC<PropsType> = ({ title, className, children }) => {
  return (
    <div className={cs(styles.root, className)}>
      <div className={styles.header}>
        {title && <div className={styles.title}>{title}</div>}
        <div>
          Submit your <span className={styles.accentLabel}>question</span> for
          today's guidance:
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CustomQuestion;
