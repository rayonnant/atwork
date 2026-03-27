import styles from './style.module.scss';
import {MainHeader} from '@components/MainHeader';
import manWebp from "@/assets/images/man.webp";
import manPNG from "@/assets/images/man.png";

export const MainPage: React.FC = () => {
    return (
        <>
            <MainHeader/>
            <main className={styles.main}>
                <div className="wrapper">
                    <section className={styles.cards__section}>
                        <h2 className={styles.cards__title}>Активные</h2>
                        <ul className={styles.cards__list} role="list">
                            <li className={styles.cards__item} key="active-1">
                                <picture className={styles["cards__photo-wrapper"]}>
                                    <source srcSet={manWebp} type='image/webp'/>
                                    <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
                                </picture>
                                <div className={styles.cards__content}>
                                    <span className={styles.cards__name}>Ivan1234</span>
                                    <span className={styles.cards__company}>At-Work</span>
                                    <span className={styles.cards__city}>Санкт-Петербург</span>
                                    <button
                                        className={styles.cards__dropdown}
                                        aria-label="Открыть опции"
                                        aria-haspopup="true"
                                    >
                                        <svg width="3" height="10" viewBox="0 0 3 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 8.75C0 9.4375 0.5625 10 1.25 10C1.9375 10 2.5 9.4375 2.5 8.75C2.5 8.0625 1.9375 7.5 1.25 7.5C0.5625 7.5 0 8.0625 0 8.75ZM0 1.25C0 1.9375 0.5625 2.5 1.25 2.5C1.9375 2.5 2.5 1.9375 2.5 1.25C2.5 0.5625 1.9375 0 1.25 0C0.5625 0 0 0.5625 0 1.25ZM0 5C0 5.6875 0.5625 6.25 1.25 6.25C1.9375 6.25 2.5 5.6875 2.5 5C2.5 4.3125 1.9375 3.75 1.25 3.75C0.5625 3.75 0 4.3125 0 5Z"
                                                fill="#161616"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className={styles.cards__item} key="active-2">
                                <picture className={styles["cards__photo-wrapper"]}>
                                    <source srcSet={manWebp} type='image/webp'/>
                                    <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
                                </picture>
                                <div className={styles.cards__content}>
                                    <span className={styles.cards__name}>LoveHat</span>
                                    <span className={styles.cards__company}>At-Work</span>
                                    <span className={styles.cards__city}>Санкт-Петербург</span>
                                    <button
                                        className={styles.cards__dropdown}
                                        aria-label="Открыть опции"
                                        aria-haspopup="true"
                                    >
                                        <svg width="3" height="10" viewBox="0 0 3 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 8.75C0 9.4375 0.5625 10 1.25 10C1.9375 10 2.5 9.4375 2.5 8.75C2.5 8.0625 1.9375 7.5 1.25 7.5C0.5625 7.5 0 8.0625 0 8.75ZM0 1.25C0 1.9375 0.5625 2.5 1.25 2.5C1.9375 2.5 2.5 1.9375 2.5 1.25C2.5 0.5625 1.9375 0 1.25 0C0.5625 0 0 0.5625 0 1.25ZM0 5C0 5.6875 0.5625 6.25 1.25 6.25C1.9375 6.25 2.5 5.6875 2.5 5C2.5 4.3125 1.9375 3.75 1.25 3.75C0.5625 3.75 0 4.3125 0 5Z"
                                                fill="#161616"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className={styles.cards__item} key="active-2">
                                <picture className={styles["cards__photo-wrapper"]}>
                                    <source srcSet={manWebp} type='image/webp'/>
                                    <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
                                </picture>
                                <div className={styles.cards__content}>
                                    <span className={styles.cards__name}>LoveHat</span>
                                    <span className={styles.cards__company}>At-Work</span>
                                    <span className={styles.cards__city}>Санкт-Петербург</span>
                                    <button
                                        className={styles.cards__dropdown}
                                        aria-label="Открыть опции"
                                        aria-haspopup="true"
                                    >
                                        <svg width="3" height="10" viewBox="0 0 3 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 8.75C0 9.4375 0.5625 10 1.25 10C1.9375 10 2.5 9.4375 2.5 8.75C2.5 8.0625 1.9375 7.5 1.25 7.5C0.5625 7.5 0 8.0625 0 8.75ZM0 1.25C0 1.9375 0.5625 2.5 1.25 2.5C1.9375 2.5 2.5 1.9375 2.5 1.25C2.5 0.5625 1.9375 0 1.25 0C0.5625 0 0 0.5625 0 1.25ZM0 5C0 5.6875 0.5625 6.25 1.25 6.25C1.9375 6.25 2.5 5.6875 2.5 5C2.5 4.3125 1.9375 3.75 1.25 3.75C0.5625 3.75 0 4.3125 0 5Z"
                                                fill="#161616"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className={styles.cards__item} key="active-2">
                                <picture className={styles["cards__photo-wrapper"]}>
                                    <source srcSet={manWebp} type='image/webp'/>
                                    <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
                                </picture>
                                <div className={styles.cards__content}>
                                    <span className={styles.cards__name}>LoveHat</span>
                                    <span className={styles.cards__company}>At-Work</span>
                                    <span className={styles.cards__city}>Санкт-Петербург</span>
                                    <button
                                        className={styles.cards__dropdown}
                                        aria-label="Открыть опции"
                                        aria-haspopup="true"
                                    >
                                        <svg width="3" height="10" viewBox="0 0 3 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 8.75C0 9.4375 0.5625 10 1.25 10C1.9375 10 2.5 9.4375 2.5 8.75C2.5 8.0625 1.9375 7.5 1.25 7.5C0.5625 7.5 0 8.0625 0 8.75ZM0 1.25C0 1.9375 0.5625 2.5 1.25 2.5C1.9375 2.5 2.5 1.9375 2.5 1.25C2.5 0.5625 1.9375 0 1.25 0C0.5625 0 0 0.5625 0 1.25ZM0 5C0 5.6875 0.5625 6.25 1.25 6.25C1.9375 6.25 2.5 5.6875 2.5 5C2.5 4.3125 1.9375 3.75 1.25 3.75C0.5625 3.75 0 4.3125 0 5Z"
                                                fill="#161616"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className={styles.cards__item} key="active-2">
                                <picture className={styles["cards__photo-wrapper"]}>
                                    <source srcSet={manWebp} type='image/webp'/>
                                    <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
                                </picture>
                                <div className={styles.cards__content}>
                                    <span className={styles.cards__name}>LoveHat</span>
                                    <span className={styles.cards__company}>At-Work</span>
                                    <span className={styles.cards__city}>Санкт-Петербург</span>
                                    <button
                                        className={styles.cards__dropdown}
                                        aria-label="Открыть опции"
                                        aria-haspopup="true"
                                    >
                                        <svg width="3" height="10" viewBox="0 0 3 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 8.75C0 9.4375 0.5625 10 1.25 10C1.9375 10 2.5 9.4375 2.5 8.75C2.5 8.0625 1.9375 7.5 1.25 7.5C0.5625 7.5 0 8.0625 0 8.75ZM0 1.25C0 1.9375 0.5625 2.5 1.25 2.5C1.9375 2.5 2.5 1.9375 2.5 1.25C2.5 0.5625 1.9375 0 1.25 0C0.5625 0 0 0.5625 0 1.25ZM0 5C0 5.6875 0.5625 6.25 1.25 6.25C1.9375 6.25 2.5 5.6875 2.5 5C2.5 4.3125 1.9375 3.75 1.25 3.75C0.5625 3.75 0 4.3125 0 5Z"
                                                fill="#161616"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className={styles.cards__item} key="active-2">
                                <picture className={styles["cards__photo-wrapper"]}>
                                    <source srcSet={manWebp} type='image/webp'/>
                                    <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
                                </picture>
                                <div className={styles.cards__content}>
                                    <span className={styles.cards__name}>LoveHat</span>
                                    <span className={styles.cards__company}>At-Work</span>
                                    <span className={styles.cards__city}>Санкт-Петербург</span>
                                    <button
                                        className={styles.cards__dropdown}
                                        aria-label="Открыть опции"
                                        aria-haspopup="true"
                                    >
                                        <svg width="3" height="10" viewBox="0 0 3 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 8.75C0 9.4375 0.5625 10 1.25 10C1.9375 10 2.5 9.4375 2.5 8.75C2.5 8.0625 1.9375 7.5 1.25 7.5C0.5625 7.5 0 8.0625 0 8.75ZM0 1.25C0 1.9375 0.5625 2.5 1.25 2.5C1.9375 2.5 2.5 1.9375 2.5 1.25C2.5 0.5625 1.9375 0 1.25 0C0.5625 0 0 0.5625 0 1.25ZM0 5C0 5.6875 0.5625 6.25 1.25 6.25C1.9375 6.25 2.5 5.6875 2.5 5C2.5 4.3125 1.9375 3.75 1.25 3.75C0.5625 3.75 0 4.3125 0 5Z"
                                                fill="#161616"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className={`${styles.cards__section} ${styles['cards__section--archive']}`}>
                        <h2 className={styles.cards__title}>Архив</h2>
                        <ul className={styles.cards__list} role="list">
                            <li className={styles.cards__item} key="archive-1">
                                <picture className={styles["cards__photo-wrapper"]}>
                                    <source srcSet={manWebp} type='image/webp'/>
                                    <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
                                </picture>
                                <div className={styles.cards__content}>
                                    <span className={styles.cards__name}>Ivan1234</span>
                                    <span className={styles.cards__company}>At-Work</span>
                                    <span className={styles.cards__city}>Санкт-Петербург</span>
                                    <button
                                        className={styles.cards__dropdown}
                                        aria-label="Открыть опции"
                                        aria-haspopup="true"
                                    >
                                        <svg width="3" height="10" viewBox="0 0 3 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 8.75C0 9.4375 0.5625 10 1.25 10C1.9375 10 2.5 9.4375 2.5 8.75C2.5 8.0625 1.9375 7.5 1.25 7.5C0.5625 7.5 0 8.0625 0 8.75ZM0 1.25C0 1.9375 0.5625 2.5 1.25 2.5C1.9375 2.5 2.5 1.9375 2.5 1.25C2.5 0.5625 1.9375 0 1.25 0C0.5625 0 0 0.5625 0 1.25ZM0 5C0 5.6875 0.5625 6.25 1.25 6.25C1.9375 6.25 2.5 5.6875 2.5 5C2.5 4.3125 1.9375 3.75 1.25 3.75C0.5625 3.75 0 4.3125 0 5Z"
                                                fill="#161616"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className={styles.cards__item} key="archive-2">
                                <picture className={styles["cards__photo-wrapper"]}>
                                    <source srcSet={manWebp} type='image/webp'/>
                                    <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
                                </picture>
                                <div className={styles.cards__content}>
                                    <span className={styles.cards__name}>LoveHat</span>
                                    <span className={styles.cards__company}>At-Work</span>
                                    <span className={styles.cards__city}>Санкт-Петербург</span>
                                    <button
                                        className={styles.cards__dropdown}
                                        aria-label="Открыть опции"
                                        aria-haspopup="true"
                                    >
                                        <svg width="3" height="10" viewBox="0 0 3 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 8.75C0 9.4375 0.5625 10 1.25 10C1.9375 10 2.5 9.4375 2.5 8.75C2.5 8.0625 1.9375 7.5 1.25 7.5C0.5625 7.5 0 8.0625 0 8.75ZM0 1.25C0 1.9375 0.5625 2.5 1.25 2.5C1.9375 2.5 2.5 1.9375 2.5 1.25C2.5 0.5625 1.9375 0 1.25 0C0.5625 0 0 0.5625 0 1.25ZM0 5C0 5.6875 0.5625 6.25 1.25 6.25C1.9375 6.25 2.5 5.6875 2.5 5C2.5 4.3125 1.9375 3.75 1.25 3.75C0.5625 3.75 0 4.3125 0 5Z"
                                                fill="#161616"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className={styles.cards__item} key="archive-3">
                                <picture className={styles["cards__photo-wrapper"]}>
                                    <source srcSet={manWebp} type='image/webp'/>
                                    <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
                                </picture>
                                <div className={styles.cards__content}>
                                    <span className={styles.cards__name}>LoveHat</span>
                                    <span className={styles.cards__company}>At-Work</span>
                                    <span className={styles.cards__city}>Санкт-Петербург</span>
                                    <button
                                        className={styles.cards__dropdown}
                                        aria-label="Открыть опции"
                                        aria-haspopup="true"
                                    >
                                        <svg width="3" height="10" viewBox="0 0 3 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 8.75C0 9.4375 0.5625 10 1.25 10C1.9375 10 2.5 9.4375 2.5 8.75C2.5 8.0625 1.9375 7.5 1.25 7.5C0.5625 7.5 0 8.0625 0 8.75ZM0 1.25C0 1.9375 0.5625 2.5 1.25 2.5C1.9375 2.5 2.5 1.9375 2.5 1.25C2.5 0.5625 1.9375 0 1.25 0C0.5625 0 0 0.5625 0 1.25ZM0 5C0 5.6875 0.5625 6.25 1.25 6.25C1.9375 6.25 2.5 5.6875 2.5 5C2.5 4.3125 1.9375 3.75 1.25 3.75C0.5625 3.75 0 4.3125 0 5Z"
                                                fill="#161616"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className={styles.cards__item} key="archive-4">
                                <picture className={styles["cards__photo-wrapper"]}>
                                    <source srcSet={manWebp} type='image/webp'/>
                                    <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
                                </picture>
                                <div className={styles.cards__content}>
                                    <span className={styles.cards__name}>LoveHat</span>
                                    <span className={styles.cards__company}>At-Work</span>
                                    <span className={styles.cards__city}>Санкт-Петербург</span>
                                    <button
                                        className={styles.cards__dropdown}
                                        aria-label="Открыть опции"
                                        aria-haspopup="true"
                                    >
                                        <svg width="3" height="10" viewBox="0 0 3 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 8.75C0 9.4375 0.5625 10 1.25 10C1.9375 10 2.5 9.4375 2.5 8.75C2.5 8.0625 1.9375 7.5 1.25 7.5C0.5625 7.5 0 8.0625 0 8.75ZM0 1.25C0 1.9375 0.5625 2.5 1.25 2.5C1.9375 2.5 2.5 1.9375 2.5 1.25C2.5 0.5625 1.9375 0 1.25 0C0.5625 0 0 0.5625 0 1.25ZM0 5C0 5.6875 0.5625 6.25 1.25 6.25C1.9375 6.25 2.5 5.6875 2.5 5C2.5 4.3125 1.9375 3.75 1.25 3.75C0.5625 3.75 0 4.3125 0 5Z"
                                                fill="#161616"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className={styles.cards__item} key="archive-5">
                                <picture className={styles["cards__photo-wrapper"]}>
                                    <source srcSet={manWebp} type='image/webp'/>
                                    <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
                                </picture>
                                <div className={styles.cards__content}>
                                    <span className={styles.cards__name}>LoveHat</span>
                                    <span className={styles.cards__company}>At-Work</span>
                                    <span className={styles.cards__city}>Санкт-Петербург</span>
                                    <button
                                        className={styles.cards__dropdown}
                                        aria-label="Открыть опции"
                                        aria-haspopup="true"
                                    >
                                        <svg width="3" height="10" viewBox="0 0 3 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 8.75C0 9.4375 0.5625 10 1.25 10C1.9375 10 2.5 9.4375 2.5 8.75C2.5 8.0625 1.9375 7.5 1.25 7.5C0.5625 7.5 0 8.0625 0 8.75ZM0 1.25C0 1.9375 0.5625 2.5 1.25 2.5C1.9375 2.5 2.5 1.9375 2.5 1.25C2.5 0.5625 1.9375 0 1.25 0C0.5625 0 0 0.5625 0 1.25ZM0 5C0 5.6875 0.5625 6.25 1.25 6.25C1.9375 6.25 2.5 5.6875 2.5 5C2.5 4.3125 1.9375 3.75 1.25 3.75C0.5625 3.75 0 4.3125 0 5Z"
                                                fill="#161616"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className={styles.cards__item} key="archive-6">
                                <picture className={styles["cards__photo-wrapper"]}>
                                    <source srcSet={manWebp} type='image/webp'/>
                                    <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
                                </picture>
                                <div className={styles.cards__content}>
                                    <span className={styles.cards__name}>LoveHat</span>
                                    <span className={styles.cards__company}>At-Work</span>
                                    <span className={styles.cards__city}>Санкт-Петербург</span>
                                    <button
                                        className={styles.cards__dropdown}
                                        aria-label="Открыть опции"
                                        aria-haspopup="true"
                                    >
                                        <svg width="3" height="10" viewBox="0 0 3 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 8.75C0 9.4375 0.5625 10 1.25 10C1.9375 10 2.5 9.4375 2.5 8.75C2.5 8.0625 1.9375 7.5 1.25 7.5C0.5625 7.5 0 8.0625 0 8.75ZM0 1.25C0 1.9375 0.5625 2.5 1.25 2.5C1.9375 2.5 2.5 1.9375 2.5 1.25C2.5 0.5625 1.9375 0 1.25 0C0.5625 0 0 0.5625 0 1.25ZM0 5C0 5.6875 0.5625 6.25 1.25 6.25C1.9375 6.25 2.5 5.6875 2.5 5C2.5 4.3125 1.9375 3.75 1.25 3.75C0.5625 3.75 0 4.3125 0 5Z"
                                                fill="#161616"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        </>
    );
};
