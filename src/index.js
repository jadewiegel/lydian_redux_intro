import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// reducer!
const count = (state = 0, action) => {
    console.log(`Hey!!! I'm a reducer y'all!!!`);
    console.log('action inside count', action);
    if(action.type === 'INCREASE'){
      state++; //can also be state = state + 1 or state += 1
    } else if(action.type === 'DECREASE'){
      state--;
    }
    return state;
};

const elementList = (state = ['oxygen', 'hydrogen'], action) => {
  console.log('action inside elementList', action.payload);
  if(action.type === 'ADD_ELEMENT'){    
    //could also be let newArray = [...state, action.payload] 
    //return newArray;
    return [...state, action.payload];
  }
  return state;
};

// store!
const storeInstance = createStore(
  combineReducers(
      {
          count,
          elementList,
      }
  ),
  applyMiddleware(logger)
);

// Provider lets redux and react talk to one another
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);