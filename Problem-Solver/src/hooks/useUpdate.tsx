import { useMainContext } from "@/context/Main";
import { CardsType } from "@/context/types";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export const useUpdate = () => {
  const { addNewCompleted } = useMainContext();
  const [ loading , setLoading] = useState(false);
  const postCard = async (newCard: CardsType) => {
    setLoading(true);
    //using promise to see loading indicator for at least one second
    await new Promise((resolve) => setTimeout(resolve , 1000))
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
