import "./App.css";
import { RouterProvider } from "react-router-dom";
import {appRouter} from "./Components/AppLayout.jsx";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store.js";
import { getCurrentUser } from "./store/Slices/authSlice.js";
import { useEffect } from "react";



const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
      <RouterProvider router={appRouter} />
  );
};

export default App;
