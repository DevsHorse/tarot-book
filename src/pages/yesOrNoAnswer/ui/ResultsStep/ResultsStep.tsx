import { useCallback, useState } from 'react';
import styles from './ResultsStep.module.css';
import { ChoosePsychicModal } from '@/widgets/choosePsychicModal';
import { YesOrNoAnswer, yesOrNoAnswerSelectors } from '@/entities/tarot';
import { Button } from '@/shared/ui/Button';
import { useAppSelector } from '@/shared/model/reduxHooks';

const ResultsStep = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, question } = useAppSelector(
    yesOrNoAnswerSelectors.getState
  );

  const onModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.presentation}>
        <YesOrNoAnswer.Card
          question={question}
          data={data}
          isLoading={isLoading}
        />
      </div>
      <div className={styles.interactions}>
        <YesOrNoAnswer.ResultAnswer
          data={data}
          isLoading={isLoading}
          actionSlot={
            <Button
              className={styles.resultAnswerActionButton}
              onClick={() => setIsModalOpen(true)}
            >
              Get The Decoding
            </Button>
          }
        />
      </div>
      <ChoosePsychicModal isOpen={isModalOpen} onClose={onModalClose} />
    </div>
  );
};

export default ResultsStep;
