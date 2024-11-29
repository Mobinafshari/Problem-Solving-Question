import { CardsType, useMainContext } from "@/context/Main";
import axios from "axios";

export const useUpdate = () => {
    const { addNewCompleted } = useMainContext();
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
        console.log(error);
      }
    };
    return { postCard }
}