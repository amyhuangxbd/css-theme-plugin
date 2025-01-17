import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { Provider } from './store';

import './index.less';

const container = document.getElementById('root') as Element;

ReactDom.createRoot(container).render(
  <Provider>
    <App />
  </Provider>,
);
