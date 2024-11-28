import NewCard from "./NewCard";
import "./styles/card.scss"

type Props = {
  card: string;
  cvv2: string;
  expireDate: string;
};

function Card({ card, cvv2, expireDate }: Props) {

  if(card === "" && cvv2 === "") return <NewCard />
  return <section className="card">
    <h2 style={{flex : 1}}>{card}</h2>
    <p style={{flex : 1}}>cvv2: {cvv2}</p>
    <p style={{flex : 1}}>Expire Date: {expireDate}</p>
  </section>;
}

export default Card;
