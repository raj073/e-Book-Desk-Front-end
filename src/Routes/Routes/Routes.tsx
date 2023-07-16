import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AddNewBook from "../../Pages/AddNewBook/AddNewBook";
import BookDetails from "../../Pages/BookDetails/BookDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Signup from "../../Pages/Signup/Signup";

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
        element: <AddNewBook></AddNewBook>,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails></BookDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
