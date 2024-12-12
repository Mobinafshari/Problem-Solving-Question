import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { CardsType, ContextType, UserCardType } from "./types";



const MainContext = createContext<ContextType | undefined>(undefined);

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const initializeUserCards = (): UserCardType => {
    const primaryCard = localStorage.getItem("primary");
    const cards: CardsType[] = []; 
    return {
      cards,
      primaryCard: primaryCard
        ? cards.find((card) => card.card === primaryCard) ||
          cards[cards.length - 1]
        : cards[cards.length - 1],
    };
  };
  const [name, setName] = useState(localStorage.getItem("name") ?? "");
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);
  const [userCards, setCards] = useState<UserCardType | undefined>(initializeUserCards());
  useEffect(() => {
    localStorage.setItem("primary" , userCards?.primaryCard?.card ?? "")
  } , [userCards])
  const addNewCompleted = (newCard: CardsType) => {
    setCards((prev) =>
      prev
        ? { ...prev, cards: [...prev.cards, newCard] }
        : { cards: [newCard], primaryCard: newCard }
    );
  };
  const updateCards = (newCards: CardsType[]) => {
    setCards({ cards: newCards, primaryCard: newCards[newCards.length - 1] });
  };
  const setPrimary = (card : CardsType) => {
    setCards((prev) => prev ? {...prev , primaryCard : card} : undefined)
  }
  return (
    <MainContext.Provider
      value={{
        name,
        updateName: setName,
        cards: userCards?.cards,
        primary : userCards?.primaryCard ,
        updateCards,
        addNewCompleted,
        setPrimary,
      }}>
      {children}
    </MainContext.Provider>
  );
};
export const useMainContext = (): ContextType => {
  const context = useContext(MainContext);
  if (!context) throw new Error("useContext should wrap within a Provider");
  return context;
};
