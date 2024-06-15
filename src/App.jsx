import "./App.css";
import { RouterProvider } from "react-router-dom";
import {appRouter} from "./Components/AppLayout.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";



const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
