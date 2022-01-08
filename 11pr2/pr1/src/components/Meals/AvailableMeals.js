import React from "react";
import classes from "./AvailableMeals.module.css";
import dummyMeals from "./dummy-meals";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const mealsList = dummyMeals.map((m) => (
    <MealItem
      key={m.id}
      id={m.id}
      name={m.name}
      description={m.description}
      price={m.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
