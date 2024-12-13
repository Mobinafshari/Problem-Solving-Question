export type ContextType = {
  name: string;
  updateName: (name: string) => void;
  cards: CardsType[] | undefined;
  primary : CardsType | undefined;
  updateCards: (cards: CardsType[]) => void;
  addNewCompleted: (newCard: CardsType) => void;
  setPrimary: (card: CardsType) => void;
};
export type CardsType = {
  cardNumber: string;
  expireDate: string;
  fullName: string;
};
export type UserCardType = {
  primaryCard: CardsType;
  cards: CardsType[];
};