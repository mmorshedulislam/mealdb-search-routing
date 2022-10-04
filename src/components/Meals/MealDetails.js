import React from "react";

const MealDetails = ({ detail }) => {
  const { strMealThumb, strMeal, strInstructions } = detail;
  return (
    <div>
      <h2 className="text-center">Meal Details</h2>
      <div className="mx-auto">
        <img src={strMealThumb} className={`img-fluid`} alt="" />
        <h3>{strMeal}</h3>
        <p>{strInstructions} ...</p>
      </div>
    </div>
  );
};

export default MealDetails;
