import { useMainContext } from "@/context/Main";
import axios from "axios";
import { useEffect, useState } from "react";

export const useGet = (name: string) => {
  const [loading, setLoading] = useState(true);
  const { updateCards } = useMainContext();
  useEffect(() => {
    const getCards = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/userCards?name=${name}`
        );
        updateCards(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCards();
  }, [name]);
  return { loading };
};
