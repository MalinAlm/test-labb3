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

  return (
    <div id="popup-container">
      <div className="popup">
        <span className="close-button" onClick={closePopup}>
          x
        </span>
        <h1>{popupDate}</h1>

        <select>
          {workoutTypes.map((workout) => (
            <option key={workout.id}> {workout.name}</option>
          ))}
        </select>

        <div id="inputWorkoutNotes">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
}

export default PopUp;
