import { useState, useEffect } from "react";
import "./PopUp.css";
import WorkoutForm from "./WorkoutForm";

interface PopupProps {
  popupOpen: boolean;
  popupDate: string;
  closePopup: () => void;
}
interface Workout {
  id?: number;
  name: string;
}

function PopUp({ popupOpen, closePopup, popupDate }: PopupProps) {
  const [workoutTypes, setworkoutTypes] = useState<Workout[]>([{ name: "" }]);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout>();
  const [selectedDateInput, setSelectedDateInput] = useState(popupDate);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result: Workout[]) => {
        console.log("Result:", result);
        setworkoutTypes(result);
      })
      .catch((error) => {
        console.log("Error fetching workoutTypes", error);
      });
  }, []);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10);

    const selected = workoutTypes.find((workout) => workout.id === selectedId);
    setSelectedWorkout(selected);
  };

  return (
    <div id="popup-container">
      <div className="popup">
        <span className="close-button" onClick={closePopup}>
          x
        </span>
        <h1>{popupDate}</h1>

        <select onChange={handleSelectChange}>
          {workoutTypes.map((workout) => (
            <option key={workout.id} value={workout.id}>
              {" "}
              {workout.name}
            </option>
          ))}
        </select>

        <div id="inputWorkoutNotes">
          <WorkoutForm
            selectDate={selectedDateInput}
            selectWorkout={selectedWorkout}
          />
        </div>
      </div>
    </div>
  );
}

export default PopUp;
