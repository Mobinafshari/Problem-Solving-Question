import { useMainContext } from "@/context/Main";
import "@styles/home.scss";
import { useState } from "react";
import CardSheet from "@/features/Card/CardSheet";
import NewCardSheet from "@/features/Card/NewCardSheet";

function Home() {
  const [openSheet, setOpenSheet] = useState(false);
  const [openNewCard, setOpenNewSheet] = useState(false);
  const { name } = useMainContext();
  return (
    <>
      <section className="home">
        <div className="home-wrapper">
          <h1>
            Hey <span className="name">{name}</span>, Welcome to your Profile
            page
          </h1>
          <button
            className="home__button"
            onClick={() => setOpenSheet((prev) => !prev)}>
            View payment cards
          </button>
        </div>
      </section>
      <CardSheet
        onClose={() => setOpenSheet(false)}
        openSheet={openSheet}
        addNew={() => {
          setOpenSheet(false);
          setOpenNewSheet(true);
        }}
      />
        <NewCardSheet
          onClose={() => setOpenNewSheet(false)}
          openSheet={openNewCard}
        />
    </>
  );
}

export default Home;
