import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import withTracker from './components/withTracker';
import App from './components/Home/app';
import Embedded from './components/Embedded/embedded';
import Application from './components/Application/application';
import Web from './components/Web/web';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/Embedded" component={withTracker(Embedded)} />
          <Route path="/Application" component={withTracker(Application)} />
          <Route path="/Web" component={withTracker(Web)} />
          <Route path="/" component={withTracker(App)} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.initial-container'));
