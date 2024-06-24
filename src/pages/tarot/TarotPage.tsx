import { Link } from 'react-router-dom';
import styles from './TarotPage.module.css';
import { Button } from '@/shared/ui/Button';
import { PageContentLayout } from '@/shared/layouts/PageContentLayout';
import { routes } from '@/shared/const/routes';

const TarotPage = () => {
  return (
    <PageContentLayout className={styles.root}>
      <h1>Tarot page</h1>
      <Link to={routes.getYesOrNoAnswer()}>
        <Button>Yes or No answer</Button>
      </Link>
    </PageContentLayout>
  );
};

export default TarotPage;
