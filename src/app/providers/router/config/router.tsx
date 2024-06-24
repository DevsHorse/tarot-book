import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { appLayout } from '@/app/layouts/appLayout';
import { routes } from '@/shared/const/routes';
import { utils } from '@/shared/utils';
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';

const NotFoundPage = utils.componentLazyLoad(() => import('@/pages/notFound'));
const MainPage = utils.componentLazyLoad(() => import('@/pages/main'));
const TarotPage = utils.componentLazyLoad(() => import('@/pages/tarot'));
const YesOrNoAnswerPage = utils.componentLazyLoad(
  () => import('@/pages/yesOrNoAnswer')
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={routes.getMain()}
      element={appLayout}
      errorElement={<ErrorBoundary />}
    >
      <Route index lazy={MainPage} />
      <Route path={routes.getTarot()} lazy={TarotPage} />
      <Route path={routes.getYesOrNoAnswer()} lazy={YesOrNoAnswerPage} />
      <Route path='*' lazy={NotFoundPage} />
    </Route>
  )
);

export default router;
