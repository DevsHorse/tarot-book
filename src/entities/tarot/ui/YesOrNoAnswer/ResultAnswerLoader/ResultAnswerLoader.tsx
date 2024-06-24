import { memo } from 'react';
import styles from './ResultAnswerLoader.module.css';
import { BlockLoader } from '@/shared/ui/BlockLoader';

const ResultAnswerLoader = memo(() => {
  return (
    <div className={styles.root}>
      {new Array(12).fill('').map((_, index) => (
        <BlockLoader key={index} className={styles.blockLoader} />
      ))}
    </div>
  );
});

export default ResultAnswerLoader;
