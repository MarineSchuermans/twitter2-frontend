import '../styles/globals.css';
import Head from 'next/head';
import Login from '../components/Login'

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import user from '../reducers/user';
import tweet from '../reducers/tweet'

import createWebStorage from "redux-persist/lib/storage/createWebStorage";
const createNoopStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null);
        },
        setItem(value) {
            return Promise.resolve(value);
        },
        removeItem() {
            return Promise.resolve();
        },
    };
};
const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const rootReducer = combineReducers({
  user, tweet
});

const persistConfig = {
  key: 'twitter',
  storage,
};

const store = configureStore({
  reducer: persistReducer(persistConfig,rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);


function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Head>
            <title>Twitter</title>
          </Head>
          <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
