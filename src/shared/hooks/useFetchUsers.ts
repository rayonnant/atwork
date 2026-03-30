import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { cardsStore, type Card as CardType } from '@/store/cardsStore.ts';

export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  company: {
    name: string;
  };
}

const fetchUsers = async (): Promise<CardType[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: UserResponse[] = await response.json();
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

  useEffect(() => {
    if (data && cards.length === 0) {
      setCards(data);
    }
  }, [data, cards.length, setCards]);

  return { cards };
};
