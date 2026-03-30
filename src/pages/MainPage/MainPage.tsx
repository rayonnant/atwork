import { Card } from '@components/Card';
import styles from './MainPage.module.scss';
import { useFetchUsers } from '@/shared/hooks/useFetchUsers.ts';

export const MainPage: React.FC = () => {
  const { cards } = useFetchUsers();

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
