import styles from './NotFoundPage.module.css';
import { PageContentLayout } from '@/shared/layouts/PageContentLayout';

const NotFoundPage = () => {
  return (
    <PageContentLayout className={styles.root}>
      <h1>404 - Page Not Found</h1>
    </PageContentLayout>
  );
};

export default NotFoundPage;
