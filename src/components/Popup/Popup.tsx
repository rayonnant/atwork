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
            width='9'
            height='9'
            viewBox='0 0 9 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.3514 1.28033C8.64429 0.987437 8.64429 0.512563 8.3514 0.21967C8.05851 -0.0732233 7.58363 -0.0732233 7.29074 0.21967L4.28554 3.22487L1.28034 0.21967C0.987446 -0.0732227 0.512572 -0.073223 0.219679 0.21967C-0.073214 0.512563 -0.0732138 0.987437 0.219679 1.28033L3.22488 4.28553L0.21967 7.29074C-0.0732231 7.58363 -0.0732234 8.0585 0.21967 8.3514C0.512563 8.64429 0.987437 8.64429 1.28033 8.3514L4.28554 5.34619L7.29075 8.3514C7.58364 8.64429 8.05851 8.64429 8.35141 8.3514C8.6443 8.05851 8.6443 7.58363 8.35141 7.29074L5.3462 4.28553L8.3514 1.28033Z'
              fill='#595959'
            />
          </svg>
        </button>

        <div className={styles['popup__content']}>
          <svg
            className={styles['popup__icon']}
            width='60'
            height='60'
            viewBox='0 0 60 60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.2757 0.905834C24.0821 -0.301945 35.252 -0.301945 46.0584 0.905834C50.1156 1.35929 53.6773 3.55336 55.9303 6.73973L27.9171 34.7529L19.2733 26.1091C18.2481 25.0839 16.5861 25.0839 15.561 26.1091C14.5358 27.1342 14.5358 28.7962 15.561 29.8214L26.061 40.3214C27.0861 41.3465 28.7481 41.3465 29.7733 40.3214L58.1773 11.9173C58.2559 12.3008 58.3187 12.6902 58.3649 13.0849C59.6572 24.1341 59.6572 35.2963 58.3649 46.3455C57.6129 52.7749 52.4508 57.8101 46.0584 58.5246C35.252 59.7323 24.0821 59.7323 13.2757 58.5246C6.88334 57.8101 1.7212 52.7749 0.96923 46.3455C-0.323077 35.2963 -0.323077 24.1341 0.96923 13.0849C1.7212 6.65552 6.88335 1.62027 13.2757 0.905834Z'
              fill='#C6F4C6'
            />
          </svg>
        </div>

        <p className={styles['popup__message']}>Изменения сохранены!</p>
      </section>
    </div>
  );
};
