import { useMainContext } from "@/context/Main";
import Sheet from "../Sheet/Sheet";
import Cards from "./Cards";
import "./styles/cardSheet.scss";
import { useGet } from "@/hooks/useGet";
import { FaPlus } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";

type Props = {
  openSheet: boolean;
  onClose: () => void;
  addNew : () => void;
};
function CardSheet({ openSheet, onClose , addNew }: Props) {
  const { name } = useMainContext();
  const { loading } = useGet(name);
  return (
    <Sheet open={openSheet} onClose={onClose}>
      <Sheet.Header headerText="Choose payment method" onClose={onClose} />
      <Sheet.Body>
        {loading ? <p>loading....</p> : <Cards />}
        <div className="add-new" onClick={addNew}>
          <FaPlus color="rgb(74, 74, 232)" />
          <p>Add new card</p>
        </div>
        <div className="security">
          <RiShieldCheckFill color="#38b000" size={40} />
          <p>
            We adhere entirely to the data security standards of the payment
            card industry.
          </p>
        </div>
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
