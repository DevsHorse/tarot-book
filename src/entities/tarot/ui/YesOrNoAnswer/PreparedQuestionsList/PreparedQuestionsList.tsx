import { FC, memo, PropsWithChildren } from 'react';
import styles from './PreparedQuestionsList.module.css';

type PropsType = { title?: string } & PropsWithChildren;

const PreparedQuestionsList: FC<PropsType> = memo(({ title, children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {title || 'Choose the question from below'}
      </div>
      <div className={styles.list}>{children}</div>
    </div>
  );
});

export default PreparedQuestionsList;
