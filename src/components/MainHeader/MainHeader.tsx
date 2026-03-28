import { Link } from 'react-router-dom';
import logoImage from '@/assets/images/logo.png';
import manWebp from '@/assets/images/man.webp';
import manPNG from '@/assets/images/man.png';
import styles from './MainHeader.module.scss';

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
              <svg className={`${styles['header__nav-icon']} ${styles['header__nav-icon--favorite']}`} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.28027 0.599609C10.9198 0.599752 12.2 1.88002 12.2002 3.51953C12.2002 4.532 11.7504 5.49822 10.8359 6.61621C9.91456 7.74268 8.58488 8.94973 6.9248 10.4551H6.92383L6.39746 10.9336L5.87402 10.46C4.21467 8.95204 2.88605 7.74417 1.96484 6.61719C1.05023 5.49822 0.599609 4.53205 0.599609 3.51953C0.599853 1.88008 1.88008 0.599853 3.51953 0.599609C4.45146 0.599609 5.35592 1.03672 5.94336 1.72656L6.40039 2.2627L6.85645 1.72656C7.44389 1.03672 8.34835 0.599609 9.28027 0.599609Z"
                       stroke-width="1.2"/>
              </svg>
            </li>

            <li className={styles['header__nav-item']}>
              <svg className={`${styles['header__nav-icon']} ${styles['header__nav-icon--notification']}`} width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.85887 0.849827C4.96046 0.598738 5.13472 0.383707 5.35931 0.232298C5.58391 0.0808887 5.8486 0 6.11946 0C6.39032 0 6.65501 0.0808887 6.8796 0.232298C7.1042 0.383707 7.27846 0.598738 7.38005 0.849827C8.38549 1.12634 9.27237 1.72527 9.90446 2.55464C10.5366 3.384 10.8789 4.39793 10.879 5.4407V8.63433L12.1246 10.5028C12.1929 10.6052 12.2321 10.7242 12.2381 10.8471C12.2441 10.9701 12.2166 11.0924 12.1585 11.2009C12.1004 11.3094 12.014 11.4002 11.9084 11.4634C11.8028 11.5267 11.682 11.5601 11.5589 11.5601H8.47541C8.39355 12.1265 8.11033 12.6445 7.67765 13.0191C7.24497 13.3938 6.6918 13.6 6.11946 13.6C5.54712 13.6 4.99395 13.3938 4.56127 13.0191C4.12859 12.6445 3.84537 12.1265 3.76351 11.5601H0.68003C0.556934 11.5601 0.436142 11.5267 0.330541 11.4634C0.22494 11.4002 0.138492 11.3094 0.080419 11.2009C0.0223465 11.0924 -0.00517137 10.9701 0.000800853 10.8471C0.00677307 10.7242 0.0460114 10.6052 0.11433 10.5028L1.35996 8.63433V5.4407C1.35996 3.24862 2.8422 1.40193 4.85887 0.849827ZM4.87643 11.5601C5.00629 11.9826 5.19371 12.241 5.39588 12.384C5.56813 12.5059 5.90879 12.5714 6.1198 12.5714C6.33081 12.5714 6.69601 12.5313 6.95421 12.3486C7.28188 12.1168 7.36802 11.759 7.43824 11.5601H4.87643ZM6.11946 1.65278C5.21782 1.65278 4.0558 2.08179 3.41825 2.71934C2.78069 3.3569 2.42251 4.53906 2.42251 5.4407V8.84035C2.42254 8.97466 2.3828 9.10596 2.30829 9.21771L1.35996 10.5028H10.879L9.92375 9.21771C9.84948 9.10589 9.80997 8.97458 9.8102 8.84035V5.4407C9.8102 4.53906 9.45202 3.3569 8.81447 2.71934C8.17691 2.08179 7.0211 1.65278 6.11946 1.65278Z"/>
              </svg>

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
