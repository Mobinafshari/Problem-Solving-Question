import { useMainContext } from "@/context/Main";
import "@styles/auth.scss"
import { useState } from "react";
import { useNavigate } from "react-router";

function WhoYouAre() {
  const [name , setName] = useState("");
  const {updateName} = useMainContext();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateName(name);
    navigate("/Home")
  };

  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <div className="parent">
        <input
          type="text"
          placeholder="enter your name here!"
          className="parent__input"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="parent__button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default WhoYouAre