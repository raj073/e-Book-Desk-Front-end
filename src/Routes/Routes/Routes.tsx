import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AddNewBook from "../../Pages/AddNewBook/AddNewBook";
import BookDetails from "../../Pages/BookDetails/BookDetails";
import BookStatusList from "../../Pages/BookStatusList/BookStatusList";
import EditBook from "../../Pages/EditBook/EditBook";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Signup from "../../Pages/Signup/Signup";
import Wishlist from "../../Pages/Wishlist/Wishlist";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/addnewbook",
        element: (
          <PrivateRoute>
            <AddNewBook></AddNewBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/book-details/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/edit-book/:id",
        element: (
          <PrivateRoute>
            <EditBook></EditBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist/",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/bookstatuslist",
        element: <BookStatusList></BookStatusList>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
