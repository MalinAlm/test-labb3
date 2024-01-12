import { useEffect, useState } from "react";
import "../App.css";

interface WorkoutData {
  id?: number;
  date: string;
  workout: string;
  notes: string;
}

function Journal() {
  const [workoutData, setWorkoutData] = useState<WorkoutData[]>([
    { workout: "", date: "", notes: "" },
  ]);

  useEffect(() => {
    console.log("Fetching data from /journal...");
    fetch("/api/journal")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        return response.json();
      })
      .then((result: WorkoutData[]) => {
        console.log("Result:", result);
        setWorkoutData(result);
        console.log("workoutData:", workoutData);
      })
      .catch((error) => {
        console.error("Error fetching Journaaal", error);
      });
  }, []);
  console.log("Rendered workoutData:", workoutData);

  return (
    <div>
      <h1>My Journal</h1>
      <div>
        {workoutData.map((workout) => (
          <div id="renderDiv" key={workout.id}>
            <p>{workout.date}</p>
            <p>{workout.workout}</p>
            <p>{workout.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journal;
