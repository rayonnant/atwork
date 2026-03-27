import { Link } from 'react-router-dom';
import logoImage from '@/assets/images/logo.png';
import favoriteIcon from '@/assets/icons/heart.svg';
import notificationIcon from '@/assets/icons/bell.svg';
import manWebp from '@/assets/images/man.webp';
import manPNG from '@/assets/images/man.png';
import styles from './style.module.scss';

export const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__wrapper} wrapper`}>
        <Link to='/'>
          <img src={logoImage} alt='Logo At-Work' className={styles.header__logo} />
        </Link>

        <nav className={styles.header__nav}>
          <ul className={styles['header__nav-list']}>
            <li className={styles['header__nav-item']}>
              <span className={styles['header__nav-icon']}>
                <img
                  src={favoriteIcon}
                  alt='Favorite'
                  className={`${styles['header__nav-icon-img']} ${styles['header__nav-icon-img--favorite']}`}
                />
              </span>
            </li>

            <li className={styles['header__nav-item']}>
              <span className={styles['header__nav-icon']}>
                <img
                  src={notificationIcon}
                  alt='Notification'
                  className={`${styles['header__nav-icon-img']} ${styles['header__nav-icon-img--notification']}`}
                />
              </span>
            </li>

            <li className={styles['header__nav-item']}>
              <span className={styles['header__user']}>
                <picture>
                  <source srcSet={manWebp} type='image/webp' />
                  <img src={manPNG} alt='Avatar' className={styles['header__user-avatar']} />
                </picture>
                <span className={styles['header__user-name']}>Ivan1234</span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
