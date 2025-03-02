// src/main.jsx

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';  // Import ErrorBoundary
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorBoundary>  {/* Wrap App with ErrorBoundary */}
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);
