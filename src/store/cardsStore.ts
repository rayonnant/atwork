import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
  updateCard: (id: number, updatedFields: Partial<Omit<Card, 'id' | 'isArchive'>>) => void;
}

export const cardsStore = create<CardsStore>()(
  persist(
    set => ({
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
      updateCard: (id, updatedFields) =>
        set(({ cards }) => ({
          cards: cards.map(c => (c.id === id ? { ...c, ...updatedFields } : c)),
        })),
    }),
    {
      name: 'cards-storage',
    },
  ),
);
