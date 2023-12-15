import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyApp() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div id="calendar">
      <Calendar className="pickDate" onChange={onChange} value={value} />
    </div>
  );
}
export default MyApp;
