import { useState, ChangeEvent, FormEvent } from "react";
import "./WorkoutForm.css";
interface WorkoutInterface {
  inputValue: string;
}

const WorkoutForm = () => {
  const [formInput, setformInput] = useState<WorkoutInterface>({
    inputValue: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setformInput({ ...formInput, inputValue: event.target.value });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log("input value:", formInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div id="workoutForm">
        <label htmlFor="workoutNote">Comment about workout: </label>
        <input
          id="workoutInput"
          type="text"
          value={formInput.inputValue}
          onChange={handleInputChange}
        />
      </div>
      <button id="workoutSubmitBtn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default WorkoutForm;
