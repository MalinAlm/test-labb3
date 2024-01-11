import { useState } from "react";
import "./WorkoutForm.css";

const WorkoutForm = ({ submitWorkout }) => {
  function submitHandler(event) {
    event.preventDefault();
    submitWorkout(event.workoutInput.value);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div id="workoutForm">
          <label htmlFor="workoutNote">Notes about workout</label>
          <input type="text" id="workoutInput" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default WorkoutForm;
