import { Provider } from "react-redux";
import Products from "./UI/Products";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store";
import Navbar from "./components/Navbar";

const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <section className="bg-white text-zinc-900">
          <Navbar />
          <Products />
        </section>
      </PersistGate>
    </Provider>
  );
}

export default App;
