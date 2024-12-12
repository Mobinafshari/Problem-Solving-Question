import "./styles/card.scss";
type Props = {
  name: string;
  card: string;
};

function Card({ name, card }: Props) {
  return (
    <div className="card">
      <figure >
        <img src="/visa-card.png" alt="card picture" className="card__image"/>
      </figure>
      <div className="card-infos">
        <p>{name}</p>
        <p>{card}</p>
      </div>
    </div>
  );
}

export default Card;
