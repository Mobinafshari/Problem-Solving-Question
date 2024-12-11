import Sheet from "../Sheet/Sheet";
import "./styles/cardSheet.scss"

type Props = {
    openSheet : boolean;
    onClose: () => void;

};
function CardSheet({openSheet , onClose} : Props) {
  return (
    <Sheet open={openSheet} onClose={onClose}>
      <Sheet.Header headerText="Choose payment method" onClose={onClose} />
      <Sheet.Body>
        <p style={{position : "relative" , zIndex :200}}>Cards here</p>
      </Sheet.Body>
      <Sheet.Footer>
        <div>
          <button className="cardSheet__button">Continue</button>
        </div>
      </Sheet.Footer>
    </Sheet>
  );
}

export default CardSheet;
