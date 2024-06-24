import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './YesOrNoAnswerPage.module.css';
import cs from 'classnames';
import { AskQuestionStep } from '../AskQuestionStep';
import { ResultsStep } from '../ResultsStep';
import { yesOrNoAnswerActions, yesOrNoAnswerSelectors } from '@/entities/tarot';
import { PageContentLayout } from '@/shared/layouts/PageContentLayout';
import { routes } from '@/shared/const/routes';
import { useAppDispatch, useAppSelector } from '@/shared/model/reduxHooks';
import { usePortalsContext } from '@/shared/contexts/portalsContext';
import { Breadcrumbs, GoBack } from '@/shared/ui/Breadcrumbs';

const breadcrumbs = [
  {
    name: 'Main',
    path: routes.getMain(),
  },
  {
    name: 'Tarot',
    path: routes.getTarot(),
  },
  {
    name: 'Yes or No answer',
  },
];

const YesOrNoAnswerPage = () => {
  const dispatch = useAppDispatch();
  const question = useAppSelector(yesOrNoAnswerSelectors.question);

  const { mobileHeaderSlotNode } = usePortalsContext();

  useEffect(() => {
    return () => {
      dispatch(yesOrNoAnswerActions.clear());
    };
  }, [dispatch]);

  return (
    <PageContentLayout className={styles.root}>
      {mobileHeaderSlotNode &&
        createPortal(
          <GoBack className={styles.goBackButton} to={routes.getTarot()}>
            Yes or no answer
          </GoBack>,
          mobileHeaderSlotNode
        )}
      <div className={cs(styles.header, 'desktop')}>
        <Breadcrumbs items={breadcrumbs} />
        <div className={styles.title}>
          {breadcrumbs[breadcrumbs.length - 1].name}
        </div>
      </div>

      {!question ? <AskQuestionStep /> : <ResultsStep />}
    </PageContentLayout>
  );
};

export default YesOrNoAnswerPage;
