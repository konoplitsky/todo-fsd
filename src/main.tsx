import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import '@mantine/core/styles.css';
import { Providers } from './app/providers.tsx';
import { queryClientConfig } from './shared/config/queryClientConfig.ts';

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser');
  await worker.start();
}

createRoot(document.getElementById('root')!).render(
  <Providers queryClient={queryClientConfig}>
    <App />
  </Providers>
);
