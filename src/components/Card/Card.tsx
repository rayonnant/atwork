import {useEffect, useRef, useState} from "react";
import manWebp from "@/assets/images/man.webp";
import manPNG from "@/assets/images/man.png";
import styles from "@pages/MainPage/MainPage.module.scss";
import {DropdownButton} from "@components/DropdownButton";
import {Dropdown} from "@components/Dropdown";

interface CardProps {
    name: string;
    company: string;
    city: string;
    isArchive: boolean;
}

export const Card: React.FC<CardProps> = ({name = '', company = '', city = '', isArchive = false}) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const dropdownRef = useRef<HTMLUListElement>(null);

    const handleDropdownButtonClick = () => {
        setOpenDropdown((prev) => !prev);
    };

    const handleCloseDropdown = () => {
        setOpenDropdown(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpenDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <li className={styles.cards__item}>
            <picture className={styles["cards__photo-wrapper"]}>
                <source srcSet={manWebp} type="image/webp" />
                <img src={manPNG} alt="Photo" className={styles.cards__photo} />
            </picture>
            <div className={styles.cards__content}>
                <span className={styles.cards__name}>{name}</span>
                <span className={styles.cards__company}>{company}</span>
                <span className={styles.cards__city}>{city}</span>
                <DropdownButton
                    ariaLabel={`Опции для ${name} из ${company}`}
                    onClick={handleDropdownButtonClick}
                />
                <Dropdown
                    ref={dropdownRef}
                    isArchive={isArchive}
                    isOpen={openDropdown}
                    onClose={handleCloseDropdown}
                />
            </div>
        </li>
    );
}
