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
  const isPrimary = primary?.cardNumber === card.cardNumber;
  return (
    <div
      className={`card ${isPrimary ? "card-primary" : ""}`}
      onClick={() => setPrimary(card)}
      aria-label={`Payment card for ${card.fullName}, ${
        isPrimary ? "primary card" : "not primary card"
      }`}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setPrimary(card);
      }}>
      <figure>
        <img
          src="/visa-card.png"
          alt="payment card picture."
          className="card__image"
        />
      </figure>
      <div>
        <p className="card-infos">
          <span className="card-infos__name">{card.fullName}</span>
          {isPrimary && <span className="card-infos__primary">Primary</span>}
        </p>
        <p className="card-infos__number">
          {convertCardNumber(card.cardNumber)}
        </p>
      </div>
      {isPrimary && (
        <div className="card-primary__wrapper">
          <span>
            <FaCheck color="white" size={12} aria-hidden="true"/>
          </span>
        </div>
      )}
    </div>
  );
}

export default Card;
