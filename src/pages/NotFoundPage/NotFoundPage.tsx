import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

export function NotFoundPage() {
  return (
    <main className={styles['not-found']}>
      <div className='layout-container'>
        <div className={styles['not-found__content']}>
          <span className={styles['not-found__code']}>404</span>
          <h2 className={styles['not-found__title']}>Страница не найдена</h2>
          <Link to='/' className={styles['not-found__button']}>
            Вернуться
          </Link>
        </div>
      </div>
    </main>
  );
}
