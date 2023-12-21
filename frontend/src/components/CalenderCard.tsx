import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalenadrCard.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyApp() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const markDateClassName: (props: calendarTileProperties) => string = ({
    date,
  }) => {
    if (date && date.getTime() === (selectedDate as Date).getTime()) {
      return "selected-date";
    }
    return "";
  };
  // const [value, onChange] = useState<Value>(new Date());
  // const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());

  return (
    <div id="calendar">
      <Calendar
        className="pickDate"
        onChange={(date) => setSelectedDate(date as Value)}
        value={selectedDate as Value}
        tileClassName={markDateClassName}
      />
      <p>{selectedDate.toString()}</p>
    </div>
  );
}
export default MyApp;
