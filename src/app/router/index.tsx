import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../../App";
import Postpage from "../../pages/postpage";
import Errorpage from "../../pages/errorpage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Errorpage />
  }, 
  {
    path: '/posts/:title',
    element: <Postpage/>
  }
])