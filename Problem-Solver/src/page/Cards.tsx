import { useMainContext } from "@/context/Main";
import Card from "@/features/Card/Card";
import "@styles/cards.scss";
import { useGet } from "@/hooks/useGet";
import Loading from "@/components/Loading";

function Cards() {
  const { name, cards, addNew } = useMainContext();
  const { loading } = useGet(name);
  if (loading) return <Loading />;
  return (
    <section className="cards">
      <div className="cards__wrapper">
        {cards?.map((card) => (
          <Card {...card} key={card.cvv2} />
        ))}
      </div>
      {cards?.length === 0 && !loading && (
        <h1>you don't have any registered payment card</h1>
      )}
      <button className="cards__addButton" onClick={addNew}>
        Add a Payment Card
      </button>
    </section>
  );
}

export default Cards;
