import React from "react";

const ListOfGoals = ({ addingGoals }) => (
  <ul>
    {addingGoals.map(({ goal, by }, i) => (
      <li key={i}>
        My goal is to {goal}, by {by}.
      </li>
    ))}
  </ul>
);

export default ListOfGoals;
