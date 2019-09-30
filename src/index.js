import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import EventsIndex from './components/events_index'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister();
