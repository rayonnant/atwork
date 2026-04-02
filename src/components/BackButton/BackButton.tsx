import styles from './BackButton.module.scss';
import { Link } from 'react-router-dom';

export function BackButton() {
  return (
    <Link to='/' className={styles['back-button']} aria-label='Вернуться назад'>
      <span className={styles['back-button__icon-container']}>
        <svg
          className={`${styles['back-button__icon']} ${styles['back-button__icon--large']}`}
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M11.25 6H0.75' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 11.25L0.75 6L6 0.75' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>

        <svg
          className={`${styles['back-button__icon']} ${styles['back-button__icon--small']}`}
          width='6'
          height='10'
          viewBox='0 0 6 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.28033 9.28033C4.98744 9.57322 4.51256 9.57322 4.21967 9.28033L0.21967 5.28033C-0.0732231 4.98744 -0.0732231 4.51256 0.21967 4.21967L4.21967 0.21967C4.51256 -0.0732233 4.98744 -0.0732233 5.28033 0.21967C5.57322 0.512563 5.57322 0.987437 5.28033 1.28033L1.81066 4.75L5.28033 8.21967C5.57322 8.51256 5.57322 8.98744 5.28033 9.28033Z'
            fill='#595959'
          />
        </svg>
      </span>

      <span className={styles['back-button__text']}>Назад</span>
    </Link>
  );
}
