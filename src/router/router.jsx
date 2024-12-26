import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Queries from "../pages/Queries";
import PrivateRoute from "./PrivateRoute";
import MyQueries from "../pages/MyQueries";
import AddQueries from "../pages/AddQueries";
import QueryDetails from "../pages/QueryDetails ";
import UpdateQuery from "../pages/UpdateQuery";
import MyRecommendations from "../pages/MyRecommendations";
import RecommendationsForMe from "../pages/RecommendationsForMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/queries",
        element: (
          <PrivateRoute>
            <Queries></Queries>
          </PrivateRoute>
        ),
      },
      {
        path: "/queries/:id",
        element: (
          <PrivateRoute>
            <QueryDetails></QueryDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-a11-product-recommendation-system-server.vercel.app/queries/${params.id}`
          ),
      },
      {
        path: "/updateQuery/:id",
        element: (
          <PrivateRoute>
            <UpdateQuery></UpdateQuery>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-a11-product-recommendation-system-server.vercel.app/queries/${params.id}`
          ),
      },
      {
        path: "/myQueries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/myRecommendations",
        element: (
          <PrivateRoute>
            <MyRecommendations></MyRecommendations>
          </PrivateRoute>
        ),
      },
      {
        path: "/recommendationsForMe",
        element: (
          <PrivateRoute>
            <RecommendationsForMe></RecommendationsForMe>
          </PrivateRoute>
        ),
      },
      {
        path: "/addQueries",
        element: (
          <PrivateRoute>
            <AddQueries></AddQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
