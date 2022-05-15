import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux";

import productsReducer from './features/productsSlice';
import { productsApi } from './features/productsApi';
import cartReducer from './features/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />

    </Provider>
  </React.StrictMode>
);