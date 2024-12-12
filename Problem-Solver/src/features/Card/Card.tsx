import { convertCardNumber } from "@/utils/convertCardNumber";
import "./styles/card.scss";
import { useMainContext } from "@/context/Main";
import { CardsType } from "@/context/types";
import { FaCheck } from "react-icons/fa";
type Props = {
  card: CardsType;
};

function Card({ card }: Props) {
  const { primary, setPrimary } = useMainContext();
  const isPrimary = primary?.card === card.card;
  return (
    <div
      className={`card ${isPrimary ? "card-primary" : ""}`}
      onClick={() => setPrimary(card)}>
      <figure>
        <img src="/visa-card.png" alt="card picture" className="card__image" />
      </figure>
      <div>
        <p className="card-infos">
          <span className="card-infos__name">{card.name}</span>
          {isPrimary && <span className="card-infos__primary">Primary</span>}
        </p>
        <p className="card-infos__number">{convertCardNumber(card.card)}</p>
      </div>
      {isPrimary && (
        <div className="card-primary__wrapper">
          <span>
            <FaCheck color="white" size={12} />
          </span>
        </div>
      )}
    </div>
  );
}

export default Card;
