import styles from './MainPage.module.scss';
import {MainHeader} from '@components/MainHeader';
import {Card} from "@components/Card";

export const MainPage: React.FC = () => {
    //todo: убрать когда добавится API
    const [name, company, city] = ['Ivan', 'At-Work', 'city']
    return (
        <>
            <MainHeader/>
            <main className={styles.main}>
                <div className="wrapper">
                    <section className={styles.cards__section}>
                        <h2 className={styles.cards__title}>Активные</h2>
                        <ul className={styles.cards__list} role="list">
                            <Card name={name} company={company} city={city} isArchive={false} key="active-1"/>
                            <Card name={name} company={company} city={city} isArchive={false} key="active-2"/>
                            <Card name={name} company={company} city={city} isArchive={false} key="active-3"/>
                            <Card name={name} company={company} city={city} isArchive={false} key="active-4"/>
                            <Card name={name} company={company} city={city} isArchive={false} key="active-5"/>
                            <Card name={name} company={company} city={city} isArchive={false} key="active-6"/>
                        </ul>
                    </section>

                    <section className={`${styles.cards__section} ${styles['cards__section--archive']}`}>
                        <h2 className={styles.cards__title}>Архив</h2>
                        <ul className={styles.cards__list} role="list">
                            <Card name={name} company={company} city={city} isArchive={true} key="archive-1"/>
                            <Card name={name} company={company} city={city} isArchive={true} key="archive-2"/>
                            <Card name={name} company={company} city={city} isArchive={true} key="archive-3"/>
                            <Card name={name} company={company} city={city} isArchive={true} key="archive-4"/>
                            <Card name={name} company={company} city={city} isArchive={true} key="archive-5"/>
                            <Card name={name} company={company} city={city} isArchive={true} key="archive-6"/>
                        </ul>
                    </section>
                </div>
            </main>
        </>
    );
};
