import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";

const Meals = () => {
  const meals = useLoaderData().data.meals;

  const getSearch = () => {
    const searchInput = document.getElementById("search-meal");
    const searchInputValue = searchInput.value;
    searchInput.value = ``;
    return searchInputValue;
  };

  return (
    <div>
      <div className="d-flex">
        <input
          id="search-meal"
          className="form-control"
          type="text"
          placeholder="Are You Hungry!"
        />
        <button onClick={getSearch} className="btn btn-info ms-2">
          Search
        </button>
      </div>

      <h2 className="text-center my-4">All Meals: {meals.length}</h2>
      <div className="row g-4">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
