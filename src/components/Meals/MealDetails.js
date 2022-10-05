import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const meal = useLoaderData();
  console.log(meal.data.meals);
  return (
    <div>
      <h2 className="text-center mt-3">Meal Details</h2>
      <div className="mx-auto"></div>
    </div>
  );
};

export default MealDetails;
