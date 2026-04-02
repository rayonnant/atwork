import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { z } from 'zod';
import { cardsStore, type Card as CardType } from '@/store/cardsStore.ts';

const userResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  address: z.object({
    city: z.string(),
  }),
  phone: z.string(),
  company: z.object({
    name: z.string(),
  }),
});

const usersResponseSchema = z.array(userResponseSchema);

const fetchUsers = async (): Promise<CardType[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const raw: unknown = await response.json();
  const data = usersResponseSchema.parse(raw);
  return data.slice(0, 6).map(user => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    city: user.address.city,
    phone: user.phone,
    companyName: user.company.name,
    isArchive: false,
  }));
};

export const useFetchUsers = () => {
  const { cards, setCards } = cardsStore();

  const { data } = useSuspenseQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: Infinity,
  });

  const initialSyncDoneRef = useRef(false);

  useEffect(() => {
    const syncFromQueryIfNeeded = () => {
      if (!data || initialSyncDoneRef.current) return;
      const { cards: storedCards } = cardsStore.getState();
      initialSyncDoneRef.current = true;
      if (storedCards.length === 0) {
        setCards(data);
      }
    };

    if (cardsStore.persist.hasHydrated()) {
      syncFromQueryIfNeeded();
    } else {
      return cardsStore.persist.onFinishHydration(() => {
        syncFromQueryIfNeeded();
      });
    }
  }, [data, setCards]);

  return { cards };
};
