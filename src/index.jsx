import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ItemsProvider } from './context/ItemsContext';

render(
  <React.StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
