import "./PopUp.css";
interface PopupProps {
  popupOpen: boolean;
  popupDate: string;
  closePopup: () => void;
}

function PopUp({ popupOpen, closePopup, popupDate }: PopupProps) {
  if (!popupOpen) return null;
  console.log("popupOpen:", popupOpen);
  console.log("closePopup:", closePopup);
  console.log("Popup:", PopUp);
  return (
    <div id="popup-container">
      <div className="popup">
        <span className="close-button" onClick={closePopup}>
          x
        </span>
        <h1>{popupDate}</h1>
        <p>Input form med post till databas HÄÄÄR</p>
        <p>Popup is {popupOpen ? "visible" : "hidden"}</p>
      </div>
    </div>
  );
}

export default PopUp;
