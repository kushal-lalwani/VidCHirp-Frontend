import "./App.css";
import { RouterProvider } from "react-router-dom";
import {appRouter} from "./Components/AppLayout.jsx";



const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
