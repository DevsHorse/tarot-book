import ReactDOM from 'react-dom/client';
import './styles/globalStyles.css';
import { AppRouter } from './providers/router';
import { StoreProvider } from './providers/store';
import { PortalsContextProvider } from './providers/PortalsContextProvider';

const rootElement = document.getElementById('root');

if (!(rootElement instanceof HTMLElement)) {
  throw new Error('The application should have a root element!');
}

ReactDOM.createRoot(rootElement).render(
  <StoreProvider>
    <PortalsContextProvider>
      <AppRouter />
    </PortalsContextProvider>
  </StoreProvider>
);
