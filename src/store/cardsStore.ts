import { create } from 'zustand';

type Card = {
  id: number;
  name: string;
  company: string;
  city: string;
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
  cards: [
    { id: 1, name: 'WowChika', company: 'Компания 1', city: 'Москва', isArchive: false },
    { id: 2, name: 'Максим', company: 'Компания 2', city: 'Санкт‑Петербург', isArchive: false },
    { id: 3, name: 'Елена', company: 'Компания 3', city: 'Санкт‑Петербург', isArchive: false },
    { id: 4, name: 'Дмитрий', company: 'Компания 4', city: 'Санкт‑Петербург', isArchive: false },
    { id: 5, name: 'Ольга', company: 'Компания 5', city: 'Санкт‑Петербург', isArchive: false },
    { id: 6, name: 'Артём', company: 'Компания 6', city: 'Санкт‑Петербург', isArchive: false },
    { id: 7, name: 'София', company: 'Компания 7', city: 'Санкт‑Петербург', isArchive: true },
    { id: 8, name: 'Никита', company: 'Компания 8', city: 'Санкт‑Петербург', isArchive: true },
    { id: 9, name: 'Вероника', company: 'Компания 9', city: 'Санкт‑Петербург', isArchive: true },
    { id: 10, name: 'Станислав', company: 'Компания 10', city: 'Санкт‑Петербург', isArchive: true },
    { id: 11, name: 'Анастасия', company: 'Компания 11', city: 'Санкт‑Петербург', isArchive: true },
    { id: 12, name: 'Игорь', company: 'Компания 12', city: 'Санкт‑Петербург', isArchive: true },
  ],

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
