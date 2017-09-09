import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';
// import render from '@sketchpixy/rubix/lib/node/router';
import l20n from '@sketchpixy/rubix/lib/L20n';

import render, {
  setupReducers,
  replaceReducers,
  applyMiddleware
} from '@sketchpixy/rubix/lib/node/redux-router';

import reducers from './reducers';
// import thunkMiddleware from 'redux-thunk';
 setupReducers(reducers);
//  applyMiddleware(thunkMiddleware);

l20n.initializeLocales({
  'locales': ['en-US', 'fr', 'it', 'ge', 'ar', 'ch'],
  'default': 'en-US'
});

render(routes, () => {
  l20n.ready();
});

if (module.hot) {
  module.hot.accept('./routes', () => {
    // reload routes again
    require('./routes').default
    render(routes);
  });
  module.hot.accept('./reducers', () => {
    let newReducers = require('./reducers');
    replaceReducers(newReducers);
  })
}
