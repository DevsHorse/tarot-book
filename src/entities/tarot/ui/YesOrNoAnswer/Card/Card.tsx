import { FC } from 'react';
import styles from './Card.module.css';
import { YesOrNoAnswerSchema } from '@/entities/tarot/model/types/YesOrNoAnswerSchema';
import cardUrl from '@/shared/assets/yesOrNoAnswer/card-2.png';
import { BlockLoader } from '@/shared/ui/BlockLoader';

type PropsType = {
  question: YesOrNoAnswerSchema['question'];
  data?: YesOrNoAnswerSchema['data'];
  isLoading?: boolean;
};

const Card: FC<PropsType> = ({ question, data, isLoading }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>Your question:</div>
        <div className={styles.question}>{question}</div>
        {isLoading ? (
          <BlockLoader className={styles.loader} />
        ) : (
          <div className={styles.answer}>{data?.answer}</div>
        )}
      </div>
      <div className={styles.imageContainer}>
        <img src={cardUrl} alt='answer taro card' loading='lazy' />
      </div>
    </div>
  );
};

export default Card;
