import { useState, ChangeEvent, FormEvent } from "react";
import "./WorkoutForm.css";
import PopUp from "./PopUp";
interface WorkoutInterface {
  inputValue: string;
}

interface Workout {
  id?: number;
  name: string;
}
interface WorkoutFormProps {
  selectWorkout?: Workout;
  selectDate: string;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({
  selectWorkout,
  selectDate,
}: WorkoutFormProps) => {
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
        <input type="text" value={selectDate} readOnly />
        <input
          type="text"
          value={selectWorkout ? selectWorkout.name : ""}
          readOnly
        />
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
