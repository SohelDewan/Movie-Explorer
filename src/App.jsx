import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import MovieListing from "./components/MovieListing";
import MovieDetails from "./components/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component : MainLayout,
    children : [
      {
        index : true,
        element : <Home/>
      },{
        path : "/movie-list",
        element : <MovieListing/>
      },
      {
        path :"/movie-list/:id",
        element : {MovieDetails}
      }
    ]
  },
]);


function Router() {
  return (
   <RouterProvider router={router} />
  )
}

export default Router
