import styles from './Dropdown.module.scss'
import {forwardRef} from "react";

interface DropdownProps {
    isArchive?: boolean;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Dropdown = forwardRef<HTMLUListElement, DropdownProps>(
    ({ isArchive = false, isOpen = false, onClose }, ref) => {
        const activeItems: string[] = ["Редактировать", "Архивировать", "Скрыть"];
        const archiveItems: string[] = ["Активировать"];

        const items: string[] = isArchive ? archiveItems : activeItems;

        if (!isOpen) {
            return null;
        }

        return (
            <ul
                ref={ref}
                className={styles.dropdown}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {items.map((text, index) => (
                    <li
                        key={`${isArchive ? "archive-" : "active-"}${index}`}
                        className={styles.dropdown__item}
                        onClick={onClose}
                    >
                        {text}
                    </li>
                ))}
            </ul>
        );
    }
);
