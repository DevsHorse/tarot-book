import styles from './MainPage.module.css';
import { PageContentLayout } from '@/shared/layouts/PageContentLayout';

const MainPage = () => {
  return (
    <PageContentLayout className={styles.root}>
      <h1>HOME</h1>
    </PageContentLayout>
  );
};

export default MainPage;
