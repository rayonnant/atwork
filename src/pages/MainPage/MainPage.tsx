import styles from './style.module.scss';
import {MainHeader} from '@components/MainHeader';
import manWebp from "@/assets/images/man.webp";
import manPNG from "@/assets/images/man.png";
import {DropdownButton} from "@components/DropdownButton";

export const MainPage: React.FC = () => {
    //todo: убрать когда добавится API
    const [name, company] = ['test', 'test']
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
                                    <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
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
                                    <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
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
                                    <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
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
                                    <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
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
                                    <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
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
                                    <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
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
                                    <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
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
                                    <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
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
                                    <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
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
                                    <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
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
                                    <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
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
                                    <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        </>
    );
};
