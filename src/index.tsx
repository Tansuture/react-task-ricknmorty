import { Provider } from 'react-redux';
import  { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { store } from './store/store';
import { saveDataToBasket } from './store/localStorage';
import { debounce } from '@mui/material';
import React from 'react'
store.subscribe(
 
  debounce(()=> {
    saveDataToBasket(
  store.getState().shopReducer.basket);
  }, 800)
);



const rootElement = document.getElementById("root");
const root = createRoot(rootElement as Element)

root.render(<Provider store={store}>

  <App/>

  </Provider>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
