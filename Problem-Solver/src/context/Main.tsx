import { createContext, ReactNode, useState, useContext } from "react";

type ContextType = {
  name: string;
  updateName: (name: string) => void;
  cards: CardsType[] | undefined;
  updateCards: (card: CardsType[]) => void;
  addNew: () => void;
  removeNew: () => void;
  addNewCompleted: ( newCard : CardsType) => void;
};
export type CardsType = {
  card: string;
  cvv2: string;
  expireDate: string;
};

const emptyCard = { card: "", cvv2: "", expireDate: "" };
const MainContext = createContext<ContextType | undefined>(undefined);

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  const [cards, setCards] = useState<CardsType[] | undefined>([]);
  const addNew = () => {
    setCards((prev) => (prev ? [...prev, emptyCard] : [emptyCard]));
  };
  const removeNew = () => {
    setCards((prev) => (prev && prev.length > 0 ? prev.slice(0, -1) : prev));
  };
  const addNewCompleted = (newCard: CardsType) => {
    setCards((prev) => {
      const updatedCards = prev?.slice(0, -1) || []; 
      return [...updatedCards, newCard]; 
    });
  };
  return (
    <MainContext.Provider
      value={{
        name,
        updateName: setName,
        cards,
        updateCards: setCards,
        addNew: cards?.includes(emptyCard) ? () => {} : addNew,
        removeNew,
        addNewCompleted,
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
