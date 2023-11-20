import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import { Home } from "@mui/icons-material";
import HomePage from "../Home";
import HotelsPage from "../HotelsPage";
import Account from "../Account";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <MainPage />,
  },
  {
    path:'/hotels',
    element:<HotelsPage/>
  },
  {
    path:'/profile',
    element:<Account/>
  }
]);

function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
