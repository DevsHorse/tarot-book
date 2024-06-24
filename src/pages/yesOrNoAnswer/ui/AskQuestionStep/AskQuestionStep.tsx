import styles from './AskQuestionStep.module.css';
import {
  CustomQuestionForm,
  PinnedCustomQuestionForm,
  PreparedQuestion,
} from '@/features/askQuestionYesOrNo';
import { YesOrNoAnswer } from '@/entities/tarot';
import { yesOrNoPreparedQuestions } from '@/shared/const/yesOrNoPreparedQuestions';

const AskQuestionStep = () => {
  return (
    <div className={styles.root}>
      <div className={styles.presentation}>
        <YesOrNoAnswer.CardPlaceholder />
      </div>
      <div className={styles.interactions}>
        <YesOrNoAnswer.PreparedQuestionsList>
          {yesOrNoPreparedQuestions.map((question) => (
            <PreparedQuestion key={question} question={question} />
          ))}
        </YesOrNoAnswer.PreparedQuestionsList>

        <YesOrNoAnswer.CustomQuestion
          className='desktop'
          title='or ask the Cards'
        >
          <CustomQuestionForm />
        </YesOrNoAnswer.CustomQuestion>

        <PinnedCustomQuestionForm className='mobile' />
      </div>
    </div>
  );
};

export default AskQuestionStep;
