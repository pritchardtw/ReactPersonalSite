import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const ReactGA = require('react-ga');
ReactGA.initialize('UA-103180508-1', { debug: false });

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

import App from './components/Home/app';
import Embedded from './components/Embedded/embedded';
import Application from './components/Application/application';
import Web from './components/Web/web';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter onUpdate={logPageView}>
      <div>
        <Switch>
          <Route path="/Embedded" component={Embedded} />
          <Route path="/Application" component={Application} />
          <Route path="/Web" component={Web} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.initial-container'));
