import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Meals from "./components/Meals/Meals";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Main from "./components/Main/Main";
import axios from "axios";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/meals",
          loader: () => {
            return axios.get(
              `https://www.themealdb.com/api/json/v1/1/search.php?s=${"Tourtiere"}`
            );
          },
          element: <Meals></Meals>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "*",
          element: <NotFound></NotFound>,
        },
      ],
    },
  ]);
  return (
    <div className="App container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
