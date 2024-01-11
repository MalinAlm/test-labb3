import { useState } from "react";
import "./WorkoutForm.css";

const WorkoutForm = ({ submitWorkout }) => {
  function submitHandler(event) {
    event.preventDefault();
    submitWorkout(event.workoutInput.value);
  }

  return (
    <>
      <div>
        <div id="workoutForm">
          <label htmlFor="workoutNote">Notes about workout</label>
          <input type="text" id="workoutInput" />
        </div>
        <button id="workoutBtn" onSubmit={submitHandler} type="submit">
          Submit
        </button>
      </div>
    </>
  );
};

export default WorkoutForm;
