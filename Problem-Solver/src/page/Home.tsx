import { useMainContext } from "@/context/Main";
import "@styles/home.scss";
import { useState } from "react";
import CardSheet from "@/features/Card/CardSheet";

function Home() {
  const [openSheet , setOpenSheet] = useState(false);
    const { name } = useMainContext();
  return (
    <>
      <section className="home">
        <div className="home-wrapper">
          <h1>
            Hello <span className="name">{name}</span>, Welcome to your Profile
            page
          </h1>
          <button
            className="home__button"
            onClick={() => setOpenSheet((prev) => !prev)}>
            View payment cards
          </button>
        </div>
      </section>
      {openSheet &&<CardSheet onClose={() => setOpenSheet(false)} openSheet={openSheet} />}
    </>
  );
}

export default Home;
