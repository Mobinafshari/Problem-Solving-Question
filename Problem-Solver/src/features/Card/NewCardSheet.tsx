import Sheet from "../Sheet/Sheet";

type Props = {
  openSheet: boolean;
  onClose: () => void;
};
function NewCardSheet({ openSheet, onClose }: Props) {
  return (
    <Sheet onClose={onClose} open={openSheet}>
      <Sheet.Header onClose={onClose} headerText="add new card" />
      <Sheet.Body>
        <div>
            
        </div>
      </Sheet.Body>
      <Sheet.Footer>
        <div>
          <button className="cardSheet__button">Save card</button>
        </div>
      </Sheet.Footer>
    </Sheet>
  );
}

export default NewCardSheet;
