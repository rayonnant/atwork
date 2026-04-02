import { useEffect, useRef } from 'react';
import manWebp from '@/assets/images/man.webp';
import manPNG from '@/assets/images/man.png';
import styles from './Card.module.scss';
import { dropdownStore } from '@/store/dropdownStore.ts';
import { DropdownButton } from '@components/DropdownButton';
import { Dropdown } from '@components/Dropdown';

interface CardProps {
  id: number;
  name?: string;
  company?: string;
  city?: string;
  isArchive?: boolean;
}

export const Card: React.FC<CardProps> = ({ id, name = '', company = '', city = '', isArchive = false }) => {
  const dropdownRef = useRef<HTMLUListElement>(null);

  const { openDropdownId, setOpenDropdownId } = dropdownStore();

  const isOpen = openDropdownId === id;

  const handleDropdownButtonClick: () => void = () => {
    if (isOpen) {
      setOpenDropdownId(null);
    } else {
      setOpenDropdownId(id);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setOpenDropdownId]);

  return (
    <li className={`${styles.card}${isArchive ? ` ${styles['card--archive']}` : ''}`}>
      <picture className={styles['card__photo-wrapper']}>
        <source srcSet={manWebp} type='image/webp' />
        <img src={manPNG} alt='Photo' className={styles.card__photo} />
      </picture>
      <div className={styles.card__content}>
        <span className={styles.card__name} title={name}>
          {name}
        </span>
        <span className={styles.card__company} title={company}>
          {company}
        </span>
        <span className={styles.card__city} title={city}>
          {city}
        </span>
        <DropdownButton ariaLabel={`Опции для ${name} из ${company}`} onClick={handleDropdownButtonClick} cardId={id} />
        <Dropdown ref={dropdownRef} isArchive={isArchive} cardId={id} />
      </div>
    </li>
  );
};
