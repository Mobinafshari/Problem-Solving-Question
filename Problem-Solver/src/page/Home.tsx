import { useMainContext } from "@/context/Main";
import { useGet } from "@/hooks/useGet";
import Loading from "@/components/Loading";
import "@styles/home.scss";
import { useState } from "react";
import CardSheet from "@/features/Card/CardSheet";

function Home() {
  const [openSheet , setOpenSheet] = useState(false);
    const { name } = useMainContext();
  const { loading } = useGet(name);
  if (loading) return <Loading />;
  return (
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
      <CardSheet onClose={() => setOpenSheet(false)} openSheet={openSheet} />
    </section>
  );
}

export default Home;
