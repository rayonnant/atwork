import styles from './Dropdown.module.scss'

interface DropdownProps {
    isArchive?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({ isArchive = false }) => {
    const activeItems: string[] = ['Редактировать', 'Архивировать', 'Скрыть'];
    const archiveItems: string[] = ['Активировать'];

    const items: string[] = isArchive ? archiveItems : activeItems;

    return (
        <ul className={styles.dropdown}>
            {items.map((text: string, index: number) => (
                <li key={index} className={styles.dropdown__item}>
                    {text}
                </li>
            ))}
        </ul>
    )
}
