import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './contact/contact-reducer';
import authReducer from './auth/auth-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contact: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };

