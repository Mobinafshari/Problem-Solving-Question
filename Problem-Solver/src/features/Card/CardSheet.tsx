import { useMainContext } from "@/context/Main";
import Sheet from "../Sheet/Sheet";
import Cards from "./Cards";
import "./styles/cardSheet.scss"
import { useGet } from "@/hooks/useGet";

type Props = {
    openSheet : boolean;
    onClose: () => void;

};
function CardSheet({openSheet , onClose} : Props) {
  const { name } = useMainContext();
  const { loading } = useGet(name);
  return (
    <Sheet open={openSheet} onClose={onClose}>
      <Sheet.Header headerText="Choose payment method" onClose={onClose} />
      <Sheet.Body>
        {loading ? <p>loading....</p> : <Cards />}
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
