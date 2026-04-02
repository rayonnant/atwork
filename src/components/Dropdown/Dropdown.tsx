import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dropdown.module.scss';
import { dropdownStore } from '@/store/dropdownStore';
import { cardsStore } from '@/store/cardsStore';

interface DropdownProps {
  isArchive?: boolean;
  cardId: number;
}

export const Dropdown = forwardRef<HTMLUListElement, DropdownProps>(({ isArchive = false, cardId }, ref) => {
  const navigate = useNavigate();
  const { openDropdownId, setOpenDropdownId } = dropdownStore();
  const isOpen: boolean = openDropdownId === cardId;

  const { removeCard, archiveCard, unarchiveCard } = cardsStore();

  if (!isOpen) {
    return null;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdownId(null);
  };

  const handleEdit = (e: React.MouseEvent) => {
    handleClick(e);
    navigate(`/edit/${cardId}`);
  };

  const handleArchive = (e: React.MouseEvent) => {
    archiveCard(cardId);
    setOpenDropdownId(null);
    handleClick(e);
  };

  const handleUnarchive = (e: React.MouseEvent) => {
    unarchiveCard(cardId);
    setOpenDropdownId(null);
    handleClick(e);
  };

  const handleRemove = (e: React.MouseEvent) => {
    removeCard(cardId);
    setOpenDropdownId(null);
    handleClick(e);
  };

  return (
    <ul ref={ref} className={styles.dropdown}>
      {!isArchive ? (
        <>
          <li key={`dropdown-item-edit-${cardId}`} className={styles.dropdown__item} onClick={handleEdit}>
            Редактировать
          </li>
          <li key={`dropdown-item-archive-${cardId}`} className={styles.dropdown__item} onClick={handleArchive}>
            Архивировать
          </li>
          <li key={`dropdown-item-hide-${cardId}`} className={styles.dropdown__item} onClick={handleRemove}>
            Скрыть
          </li>
        </>
      ) : (
        <li key={`dropdown-item-activate-${cardId}`} className={styles.dropdown__item} onClick={handleUnarchive}>
          Активировать
        </li>
      )}
    </ul>
  );
});

Dropdown.displayName = 'Dropdown';
