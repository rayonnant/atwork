import styles from "@pages/MainPage/MainPage.module.scss";
import manWebp from "@/assets/images/man.webp";
import manPNG from "@/assets/images/man.png";
import {DropdownButton} from "@components/DropdownButton";
import {Dropdown} from "@components/Dropdown";

interface CardProps {
    name: string;
    company: string;
    city: string;
    isArchive: boolean;
}

export const Card: React.FC<CardProps> = ({ name = '', company = '', city = '',  isArchive = false  }) => {
    return (
        <li className={styles.cards__item} key="active-1">
            <picture className={styles["cards__photo-wrapper"]}>
                <source srcSet={manWebp} type='image/webp'/>
                <img src={manPNG} alt='Photo' className={styles.cards__photo}/>
            </picture>
            <div className={styles.cards__content}>
                <span className={styles.cards__name}>{name}</span>
                <span className={styles.cards__company}>{company}</span>
                <span className={styles.cards__city}>{city}</span>
                <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} />
                <Dropdown isArchive={isArchive}/>
            </div>
        </li>
    )
}
