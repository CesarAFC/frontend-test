import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import configureStore from "../store";

const { store } = configureStore();

describe("Navbar component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  });

  test("renders navbar component with title", () => {
    const children = "Payment App";
    screen.getByText(children);
  });
});
