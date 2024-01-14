import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "./WorkoutForm.css";
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

interface PostData {
  date: string;
  workout: string;
  notes: string;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({
  selectWorkout,
  selectDate,
}) => {
  const [formInput, setformInput] = useState<WorkoutInterface>({
    inputValue: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setformInput({ ...formInput, inputValue: event.target.value });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const formDataPost: PostData = {
      date: selectDate,
      workout: selectWorkout ? selectWorkout.name : "",
      notes: formInput.inputValue,
    };
    console.log("formDataPost:", formDataPost);
    console.log("selectDate", selectDate);
    console.log("formInput.inputValue:", formInput.inputValue);
    console.log(
      `selectWorkout ? selectWorkout.name : ""`,
      selectWorkout ? selectWorkout.name : ""
    );

    fetch("/api/journal", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formDataPost),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to submit data: ${response.status}`);
        }
        return response.json();
      })
      .then((updatedFormData) => {
        console.log("updatedFormData:", updatedFormData);
      })
      .catch((error) => {
        console.error("Error, submit not working", error);
      });
  };

  return (
    <form method="POST" onSubmit={submitHandler}>
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
