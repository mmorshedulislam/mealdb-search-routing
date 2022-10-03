import React from "react";
import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const { strInstructions, strMealThumb, strMeal } = meal;

  const navigate = useNavigate();
  const handleEatNow = () => {
    navigate(`/meal/${strMeal}`)
  }

  return (
    <div className="col-md-4">
      <img className="img-fluid" src={strMealThumb} alt="" />
      <h3 className="text-start mt-3">{strMeal}</h3>
      <p className="text-start">
        <strong>Description: </strong>
        {strInstructions.substring(0, 250)}
      </p>
      <button onClick={handleEatNow} type="button" className="btn btn-primary">
        Eat Now
      </button>
    </div>
  );
};

export default Meal;
