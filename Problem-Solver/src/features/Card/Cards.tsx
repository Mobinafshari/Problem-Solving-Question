import { useMainContext } from "@/context/Main"
import Card from "./Card"
import "./styles/cards.scss";

function Cards() {
  const {cards} = useMainContext()
  return (
    <section className="cards">{cards?.map((card) => <Card card={card} key={card.card}/>)}</section>
  )
}

export default Cards