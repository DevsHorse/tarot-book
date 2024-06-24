import { FC, ReactElement } from 'react';
import styles from './ResultAnswer.module.css';
import cs from 'classnames';
import { ResultAnswerLoader } from '../ResultAnswerLoader';
import { YesOrNoAnswerSchema } from '@/entities/tarot/model/types/YesOrNoAnswerSchema';
import messageUserUrl from '@/shared/assets/yesOrNoAnswer/message-user-icon.png';
import { LightBulbIcon } from '@/shared/ui/icons/LightBulbIcon';

type PropsType = {
  data: YesOrNoAnswerSchema['data'];
  actionSlot?: ReactElement;
  isLoading?: boolean;
};

const ResultAnswer: FC<PropsType> = ({ data, actionSlot, isLoading }) => {
  return (
    <div className={cs(styles.root, { [styles.loading]: isLoading })}>
      <div className={styles.message}>
        {isLoading ? (
          <ResultAnswerLoader />
        ) : (
          <div className={styles.answer}>{data?.explanation}</div>
        )}
        <div className={styles.userIcon}>
          <img src={messageUserUrl} alt='message user icon' loading='lazy' />
        </div>
      </div>
      {!isLoading && (
        <div className={styles.footer}>
          {actionSlot}
          <div className={styles.noteContainer}>
            <div className={styles.noteIcon}>
              <LightBulbIcon />
            </div>
            <div className={styles.noteText}>
              Use this tool as a clue; for the precise answer, consult our tarot
              reader providing more data.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultAnswer;
