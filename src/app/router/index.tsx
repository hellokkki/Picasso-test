import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../../App";
import Postpage from "../../pages/postpage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }, 
  {
    path: '/posts/:title',
    element: <Postpage/>
  }
])