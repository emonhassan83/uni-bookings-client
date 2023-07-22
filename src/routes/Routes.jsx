import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import College from "../pages/College/College";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/colleges",
            element: <Colleges/>,
          },
          {
            path: "/college/:id",
            element: <College/>,
            loader: ({params}) =>  fetch(`${import.meta.env.VITE_API_URL}/college/${params.id}`)
          },
          {
            path: "/admission",
            element: <PrivateRoute><Admission/></PrivateRoute>,
          },
          {
            path: "/myCollege",
            element: <PrivateRoute><MyCollege/></PrivateRoute>,
          },
          {
            path: "/profile",
            element: <Profile/>
          },
        ]
    },
    {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
  ]);

export default router;