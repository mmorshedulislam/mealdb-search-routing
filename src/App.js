import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Meals from "./components/Meals/Meals";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Main from "./components/Main/Main";
import axios from "axios";
import { useState } from "react";
import MealDetails from "./components/Meals/MealDetails"


function App() {
  const [search, setSearch] = useState("");
  const handleGetData = (data) => {
    setSearch(data);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main handleGetData={handleGetData}></Main>,
      children: [
        {
          path: "/meals",
          loader: async () => {
            return axios.get(
              `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
            );
          },
          element: <Meals></Meals>,
        },
        {
          path: `/meal/:name`,
          loader: async ({ params }) => {
            return axios.get(
              `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`
            );
          },
          element: <MealDetails/>
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
