import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";
import MealDetails from "./MealDetails";

const Meals = () => {
  const meals = useLoaderData().data.meals;

  const getSearch = () => {
    const searchInput = document.getElementById("search-meal");
    const searchInputValue = searchInput.value;
    searchInput.value = ``;
    return searchInputValue;
  };

  const [detail, setDetail] = useState({});
  console.log(detail);
  const handleMealDetail = (selectedMeal) => {
    setDetail(selectedMeal);
  };

  return (
    <div>
      <h2 className="text-center my-4">All Meals: {meals.length}</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="row g-4">
            {meals.map((meal) => (
              <Meal
                key={meal.idMeal}
                meal={meal}
                handleMealDetail={handleMealDetail}
              ></Meal>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <MealDetails detail={detail}></MealDetails>
        </div>
      </div>
    </div>
  );
};

export default Meals;
