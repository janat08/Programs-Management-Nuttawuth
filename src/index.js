
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import App from './App';
import store from "./stores/store.js"
import 'semantic-ui-css/semantic.min.css';


const stores = {
  store,
};

ReactDOM.render((
    <Provider {...stores}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
     </Provider>
  ), document.getElementById('root'));
  registerServiceWorker();
