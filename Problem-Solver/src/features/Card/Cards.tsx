import { useMainContext } from "@/context/Main"
import Card from "./Card"
import "./styles/cards.scss";

function Cards() {
  const {cards} = useMainContext();
  if(cards?.length === 0) return <p style={{textAlign : "center" , color : "gray"}}>You don't have any credit card yet.</p>;
  return (
    <section className="cards">{cards?.map((card) => <Card card={card} key={card.cardNumber}/>)}</section>
  )
}

export default Cards