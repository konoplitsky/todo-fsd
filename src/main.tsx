import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Providers } from './app/providers.tsx';
import { queryClientConfig } from './shared/config/queryClientConfig.ts';

import './index.css';

import '@mantine/core/styles.css';

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser');
  await worker.start();
}

createRoot(document.getElementById('root')!).render(
  <Providers queryClient={queryClientConfig}>
    <App />
  </Providers>
);
