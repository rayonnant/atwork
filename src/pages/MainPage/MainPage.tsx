import { Card } from '@components/Card';
import styles from './MainPage.module.scss';
import { useFetchUsers } from '@/shared/hooks/useFetchUsers.ts';

export function MainPage() {
  const { cards } = useFetchUsers();

  const activeCards = cards.filter(item => !item.isArchive);
  const archivedCards = cards.filter(item => item.isArchive);

  return (
    <main className={styles['main-page']}>
      <div className='layout-container'>
        <section>
          <h2 className={styles['main-page__title']}>Активные</h2>
          <ul className={styles['main-page__list']} role='list'>
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

        <section>
          <h2 className={styles['main-page__title']}>Архив</h2>
          <ul className={styles['main-page__list']} role='list'>
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
}
