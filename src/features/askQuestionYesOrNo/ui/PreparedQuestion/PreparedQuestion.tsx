import { FC, useCallback } from 'react';
import styles from './PreparedQuestion.module.css';
import { yesOrNoAnswerThunkActions } from '@/entities/tarot';
import { ArrowRightIcon } from '@/shared/ui/icons/ArrowRightIcon';
import { useAppDispatch } from '@/shared/model/reduxHooks';

type PropsType = {
  question: string;
};

const PreparedQuestion: FC<PropsType> = ({ question }) => {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(yesOrNoAnswerThunkActions.getYesOrNoAnswer({ question }));
  }, [dispatch, question]);

  return (
    <div className={styles.root} onClick={handleClick}>
      <div className={styles.question}>{question}</div>
      <div className={styles.arrow}>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default PreparedQuestion;
