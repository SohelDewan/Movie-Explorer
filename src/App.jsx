import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import MovieListing from "./components/MovieListing";
// import MovieCard from "./components/MovieCard";

const router = createBrowserRouter([
  {
    path: "/",
    Component : MainLayout,
    children : [
      {
        index : true,
        element : <Home/>
      },{
        path : "/movielist",
        element : <MovieListing/>
      },
      // {
      //   path :"/movielist/:id",
      //   element : <MovieCard />
      // }
    ]
  },
]);


function Router() {
  return (
   <RouterProvider router={router} />
  )
}

export default Router
