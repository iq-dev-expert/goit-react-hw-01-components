import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/profile/App';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
