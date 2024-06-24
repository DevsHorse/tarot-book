import { useNavigate, useRouteError } from 'react-router-dom';
import styles from './ErrorBoundary.module.css';
import { Button } from '@/shared/ui/Button';
import { routes } from '@/shared/const/routes';

const ErrorBoundary = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.root}>
      <div className={styles.title}>Something went wrong...</div>
      <Button onClick={() => navigate(routes.getMain())}>Go home</Button>
    </div>
  );
};

export default ErrorBoundary;
