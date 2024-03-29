import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarCard.css";
import PopUp from "./PopUp";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
interface calendarTileProperties {
  activeStartDate: Date;
  date: Date;
  view: string;
}

function CalenderCard() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());

  const markDateClassName: (props: calendarTileProperties) => string = ({
    date,
  }) => {
    if (date && date.getTime() === (selectedDate as Date).getTime()) {
      return "selected-date";
    }
    return "";
  };

  const calendarChange = (date: Value) => {
    setSelectedDate(date);
    setPopupIsOpen(true);
  };

  const closingPopup = () => {
    setPopupIsOpen(false);
  };

  const generatePopupContent = (date: Date): string => {
    return ` ${date.toDateString()}`;
  };

  return (
    <div id="calendar">
      <Calendar
        className="pickDate"
        onChange={(date) => calendarChange(date as Value)}
        value={selectedDate as Value}
        tileClassName={markDateClassName}
      />
      <PopUp
        popupOpen={popupIsOpen}
        closePopup={closingPopup}
        popupDate={generatePopupContent(selectedDate as Date)}
      />
    </div>
  );
}
export default CalenderCard;
