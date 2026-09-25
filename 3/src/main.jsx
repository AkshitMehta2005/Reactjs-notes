import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import MoneyState from './context/MoneyState';  // Import MoneyState, not MyContext

// Wrap App in MoneyState to provide context
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoneyState>  {/* Use MoneyState as the context provider */}
      <App />
    </MoneyState>
  </StrictMode>
);
