import { cardsStore, type Card as CardType } from '@/store/cardsStore.ts';
import styles from './MainPage.module.scss';
import { Card } from '@components/Card';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Loader } from '@components/Loader';

const fetchUsers = async (): Promise<CardType[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.slice(0, 6).map((user: any) => ({
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

export const MainPage: React.FC = () => {
  const { cards, setCards } = cardsStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    enabled: cards.length === 0,
  });

  useEffect(() => {
    if (data && cards.length === 0) {
      setCards(data);
    }
  }, [data, cards.length, setCards]);

  if (isLoading && cards.length === 0) {
    return (
      <main className={styles.main}>
        <Loader />
      </main>
    );
  }

  if (isError && cards.length === 0) {
    return (
      <main className={styles.main}>
        <div className='wrapper'>
          <p>Error loading users</p>
        </div>
      </main>
    );
  }

  const activeCards = cards.filter(item => !item.isArchive);
  const archivedCards = cards.filter(item => item.isArchive);

  return (
    <main className={styles.main}>
      <div className='wrapper'>
        <section className={styles.cards__section}>
          <h2 className={styles.cards__title}>Активные</h2>
          <ul className={styles.cards__list} role='list'>
            {activeCards.map(item => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                company={item.companyName}
                city={item.city}
                isArchive={item.isArchive}
              />
            ))}
          </ul>
        </section>

        <section className={`${styles.cards__section} ${styles['cards__section--archive']}`}>
          <h2 className={styles.cards__title}>Архив</h2>
          <ul className={styles.cards__list} role='list'>
            {archivedCards.map(item => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                company={item.companyName}
                city={item.city}
                isArchive={item.isArchive}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};
