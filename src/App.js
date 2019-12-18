import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // 단일 Store 생성
import reducers from './reducers';
import logo from './logo.svg';
import './App.css';

import { add } from './actions';
import Counter from './Counter';

function App() {
  return (
    <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <Counter />
    </Provider>
  );
}

export default App;
