import { useMainContext } from "@/context/Main";
import { CardsType } from "@/context/types";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export const useUpdate = () => {
  const { addNewCompleted } = useMainContext();
  const [ loading , setLoading] = useState(true);
  const postCard = async (newCard: CardsType) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/userCards",
        newCard,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      addNewCompleted(data);
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error)
    }finally{
      setLoading(false);
    }
  };
  return { postCard , loading };
};
