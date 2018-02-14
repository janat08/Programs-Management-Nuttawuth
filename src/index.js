
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import App from './App';
import store from "./stores/store.js"

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);


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
