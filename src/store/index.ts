import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import reducer from '../reducers';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['shopping'],
  }

  const persistedReducer = persistReducer(persistConfig, reducer)

// const store = createStore(reducer);

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
  }
// export default store;