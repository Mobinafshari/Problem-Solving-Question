import {  useMainContext } from "@/context/Main";
import Card from "@/features/Card/Card";
import { useEffect, useState } from "react";
import "@styles/cards.scss";

function Cards() {
  const { name, cards, updateCards, addNew } = useMainContext();
  // const [cards, setCards] = useState<CardsType[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/${name}`)
      .then((response) => response.json())
      .then((data) => updateCards(data))
      .finally(() => setLoading(false));
  }, [name]);
  return (
    <section className="cards">
      <div className="cards__wrapper">
        {cards?.map((card) => (
          <Card {...card} key={card.cvv2} />
        ))}
      </div>
      {!cards && !loading && (
        <h1>you don't have any registered payment card</h1>
      )}
      <button className="cards__addButton" onClick={addNew}>
        Add a Payment Card
      </button>
    </section>
  );
}

export default Cards;
