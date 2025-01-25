import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutUsPage from "./pages/AboutUsPage";
import "./styles/index.css";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <AboutUsPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
