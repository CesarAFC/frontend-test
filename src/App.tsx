import "./App.css";
import { Provider } from "react-redux";
// import store from "./store";
import Products from "./UI/Products";
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store';

const {store, persistor} = configureStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Products />
      </PersistGate>
    </Provider>
  );
}

export default App;
