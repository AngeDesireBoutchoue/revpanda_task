
import * as React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk';


import AppNavigator from './src/navigation/appnavigator';
import homeReducer from './src/reducers/home/home';


const rootReducer = combineReducers({
  home:homeReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

