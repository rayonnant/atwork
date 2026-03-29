import styles from './Popup.module.scss';
import { useEffect } from 'react';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`${styles.popup} ${styles['popup--visible']}`}>
      <div className={styles['popup__overlay']} onClick={onClose} />

      <section className={styles['popup__window']}>
        <button type='button' className={styles['popup__close']} aria-label='Закрыть поп‑ап' onClick={onClose}>
          <svg
            className={styles['popup__close-icon']}
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M13 13L27 27M13 27L27 13' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
          </svg>
        </button>

        <div className={styles['popup__content']}>
          <svg
            className={styles['popup__icon']}
            width='59.33'
            height='59.43'
            viewBox='0 0 59.33 59.43'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='29.665' cy='29.715' r='24.5' stroke='currentColor' strokeWidth='2' />
            <path
              d='M23 29l5 5 8-8'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>

        <p className={styles['popup__message']}>Изменения сохранены!</p>
      </section>
    </div>
  );
};
