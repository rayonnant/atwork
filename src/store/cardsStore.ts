import { create } from 'zustand';

export type Card = {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
  phone: string;
  companyName: string;
  isArchive: boolean;
};

interface CardsStore {
  cards: Card[];
  setCards: (cards: Card[]) => void;
  addCard: (card: Card) => void;
  removeCard: (id: number) => void;
  archiveCard: (id: number) => void;
  unarchiveCard: (id: number) => void;
}

export const cardsStore = create<CardsStore>(set => ({
  cards: [],

  setCards: cards => set({ cards }),
  addCard: card =>
    set(({ cards }) => ({
      cards: [...cards, card],
    })),
  removeCard: id =>
    set(({ cards }) => ({
      cards: cards.filter(c => c.id !== id),
    })),
  archiveCard: id =>
    set(({ cards }) => ({
      cards: cards.map(c => (c.id === id ? { ...c, isArchive: true } : c)),
    })),
  unarchiveCard: id =>
    set(({ cards }) => ({
      cards: cards.map(c => (c.id === id ? { ...c, isArchive: false } : c)),
    })),
}));
