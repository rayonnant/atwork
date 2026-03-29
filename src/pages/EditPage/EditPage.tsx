import styles from './EditPage.module.scss';
import manWebp from '@/assets/images/man.webp';
import manPNG from '@/assets/images/man.png';
import { useForm } from 'react-hook-form';
import { formSchema, type FormSchema } from '@/shared/utils/userFormSchema';
import { BackButton } from '@components/BackButton/BackButton.tsx';
import { Popup } from '@components/Popup';
import { useState } from 'react';

import { useParams } from 'react-router-dom';
import { cardsStore } from '@/store/cardsStore.ts';
import { useEffect } from 'react';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { useFetchUsers } from '@/shared/hooks/useFetchUsers.ts';

export const EditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  useFetchUsers();
  const { cards, updateCard } = cardsStore();
  const user = cards.find(c => c.id === Number(id));

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormSchema>();

  const watchAllFields = watch();

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('nickname', user.username);
      setValue('email', user.email);
      setValue('city', user.city);
      setValue('phone', user.phone);
      setValue('companyName', user.companyName);
    }
  }, [user, setValue]);

  if (!user || user.isArchive) {
    return <NotFoundPage />;
  }

  const handleSuccess = () => {
    setIsPopupVisible(true);
  };

  const onSubmit = (data: unknown) => {
    const parsed = formSchema.safeParse(data);
    if (!parsed.success) {
      parsed.error.errors.forEach(err => {
        setError(err.path[0] as keyof FormSchema, {
          type: 'manual',
          message: err.message,
        });
      });
      return;
    }

    if (user) {
      updateCard(user.id, {
        name: parsed.data.name,
        username: parsed.data.nickname,
        email: parsed.data.email,
        city: parsed.data.city,
        phone: parsed.data.phone,
        companyName: parsed.data.companyName,
      });
    }

    console.log(parsed.data);
    handleSuccess();
  };

  return (
    <main className={styles.main}>
      <div className='wrapper'>
        <BackButton />
        <Popup onClose={() => setIsPopupVisible(false)} isOpen={isPopupVisible} />
        <div className={styles['edit-page__content']}>
          <section className={styles['settings__section']}>
            <picture className={styles['settings__photo-wrapper']}>
              <source srcSet={manWebp} type='image/webp' />
              <img src={manPNG} alt='Photo' className={styles.settings__photo} />
            </picture>
            <ul className={styles['settings__options']}>
              <li className={`${styles['settings__options__item']} ${styles['settings__options__item--active']}`}>
                Данные профиля
              </li>
              <li className={styles['settings__options__item']}>Рабочее пространство</li>
              <li className={styles['settings__options__item']}>Приватность</li>
              <li className={styles['settings__options__item']}>Безопасность</li>
            </ul>
          </section>

          <section className={styles['profile-data__section']}>
            <h2 className={styles['profile-data__title']}>Данные профиля</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles['profile-data__form']}>
              <label htmlFor='name' className={styles['profile-data__label']}>
                Имя
              </label>
              <div className={styles['profile-data__input-wrapper']}>
                <input
                  id='name'
                  type='text'
                  placeholder='Введите имя'
                  className={styles['profile-data__input']}
                  {...register('name')}
                />
                {watchAllFields.name && (
                  <button
                    type='button'
                    className={styles['profile-data__clear-button']}
                    onClick={() => setValue('name', '')}
                    aria-label='Clear input'
                  >
                    <svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.3514 1.28033C8.64429 0.987437 8.64429 0.512563 8.3514 0.21967C8.05851 -0.0732233 7.58363 -0.0732233 7.29074 0.21967L4.28554 3.22487L1.28034 0.21967C0.987446 -0.0732227 0.512572 -0.073223 0.219679 0.21967C-0.073214 0.512563 -0.0732138 0.987437 0.219679 1.28033L3.22488 4.28553L0.21967 7.29074C-0.0732231 7.58363 -0.0732234 8.0585 0.21967 8.3514C0.512563 8.64429 0.987437 8.64429 1.28033 8.3514L4.28554 5.34619L7.29075 8.3514C7.58364 8.64429 8.05851 8.64429 8.35141 8.3514C8.6443 8.05851 8.6443 7.58363 8.35141 7.29074L5.3462 4.28553L8.3514 1.28033Z'
                        fill='#161616'
                      />
                    </svg>
                  </button>
                )}
              </div>
              {errors.name && <span className={styles['profile-data__error']}>{errors.name.message}</span>}

              <label htmlFor='nickname' className={styles['profile-data__label']}>
                Никнейм
              </label>
              <div className={styles['profile-data__input-wrapper']}>
                <input
                  id='nickname'
                  type='text'
                  placeholder='Введите никнейм'
                  className={styles['profile-data__input']}
                  {...register('nickname')}
                />
                {watchAllFields.nickname && (
                  <button
                    type='button'
                    className={styles['profile-data__clear-button']}
                    onClick={() => setValue('nickname', '')}
                    aria-label='Clear input'
                  >
                    <svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.3514 1.28033C8.64429 0.987437 8.64429 0.512563 8.3514 0.21967C8.05851 -0.0732233 7.58363 -0.0732233 7.29074 0.21967L4.28554 3.22487L1.28034 0.21967C0.987446 -0.0732227 0.512572 -0.073223 0.219679 0.21967C-0.073214 0.512563 -0.0732138 0.987437 0.219679 1.28033L3.22488 4.28553L0.21967 7.29074C-0.0732231 7.58363 -0.0732234 8.0585 0.21967 8.3514C0.512563 8.64429 0.987437 8.64429 1.28033 8.3514L4.28554 5.34619L7.29075 8.3514C7.58364 8.64429 8.05851 8.64429 8.35141 8.3514C8.6443 8.05851 8.6443 7.58363 8.35141 7.29074L5.3462 4.28553L8.3514 1.28033Z'
                        fill='#161616'
                      />
                    </svg>
                  </button>
                )}
              </div>
              {errors.nickname && <span className={styles['profile-data__error']}>{errors.nickname.message}</span>}

              <label htmlFor='email' className={styles['profile-data__label']}>
                Почта
              </label>
              <div className={styles['profile-data__input-wrapper']}>
                <input
                  id='email'
                  type='email'
                  placeholder='Введите email'
                  className={styles['profile-data__input']}
                  {...register('email')}
                />
                {watchAllFields.email && (
                  <button
                    type='button'
                    className={styles['profile-data__clear-button']}
                    onClick={() => setValue('email', '')}
                    aria-label='Clear input'
                  >
                    <svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.3514 1.28033C8.64429 0.987437 8.64429 0.512563 8.3514 0.21967C8.05851 -0.0732233 7.58363 -0.0732233 7.29074 0.21967L4.28554 3.22487L1.28034 0.21967C0.987446 -0.0732227 0.512572 -0.073223 0.219679 0.21967C-0.073214 0.512563 -0.0732138 0.987437 0.219679 1.28033L3.22488 4.28553L0.21967 7.29074C-0.0732231 7.58363 -0.0732234 8.0585 0.21967 8.3514C0.512563 8.64429 0.987437 8.64429 1.28033 8.3514L4.28554 5.34619L7.29075 8.3514C7.58364 8.64429 8.05851 8.64429 8.35141 8.3514C8.6443 8.05851 8.6443 7.58363 8.35141 7.29074L5.3462 4.28553L8.3514 1.28033Z'
                        fill='#161616'
                      />
                    </svg>
                  </button>
                )}
              </div>
              {errors.email && <span className={styles['profile-data__error']}>{errors.email.message}</span>}

              <label htmlFor='city' className={styles['profile-data__label']}>
                Город
              </label>
              <div className={styles['profile-data__input-wrapper']}>
                <input
                  id='city'
                  type='text'
                  placeholder='Введите город'
                  className={styles['profile-data__input']}
                  {...register('city')}
                />
                {watchAllFields.city && (
                  <button
                    type='button'
                    className={styles['profile-data__clear-button']}
                    onClick={() => setValue('city', '')}
                    aria-label='Clear input'
                  >
                    <svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.3514 1.28033C8.64429 0.987437 8.64429 0.512563 8.3514 0.21967C8.05851 -0.0732233 7.58363 -0.0732233 7.29074 0.21967L4.28554 3.22487L1.28034 0.21967C0.987446 -0.0732227 0.512572 -0.073223 0.219679 0.21967C-0.073214 0.512563 -0.0732138 0.987437 0.219679 1.28033L3.22488 4.28553L0.21967 7.29074C-0.0732231 7.58363 -0.0732234 8.0585 0.21967 8.3514C0.512563 8.64429 0.987437 8.64429 1.28033 8.3514L4.28554 5.34619L7.29075 8.3514C7.58364 8.64429 8.05851 8.64429 8.35141 8.3514C8.6443 8.05851 8.6443 7.58363 8.35141 7.29074L5.3462 4.28553L8.3514 1.28033Z'
                        fill='#161616'
                      />
                    </svg>
                  </button>
                )}
              </div>
              {errors.city && <span className={styles['profile-data__error']}>{errors.city.message}</span>}

              <label htmlFor='phone' className={styles['profile-data__label']}>
                Телефон
              </label>
              <div className={styles['profile-data__input-wrapper']}>
                <input
                  id='phone'
                  type='text'
                  placeholder='Введите телефон'
                  className={styles['profile-data__input']}
                  {...register('phone')}
                />
                {watchAllFields.phone && (
                  <button
                    type='button'
                    className={styles['profile-data__clear-button']}
                    onClick={() => setValue('phone', '')}
                    aria-label='Clear input'
                  >
                    <svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.3514 1.28033C8.64429 0.987437 8.64429 0.512563 8.3514 0.21967C8.05851 -0.0732233 7.58363 -0.0732233 7.29074 0.21967L4.28554 3.22487L1.28034 0.21967C0.987446 -0.0732227 0.512572 -0.073223 0.219679 0.21967C-0.073214 0.512563 -0.0732138 0.987437 0.219679 1.28033L3.22488 4.28553L0.21967 7.29074C-0.0732231 7.58363 -0.0732234 8.0585 0.21967 8.3514C0.512563 8.64429 0.987437 8.64429 1.28033 8.3514L4.28554 5.34619L7.29075 8.3514C7.58364 8.64429 8.05851 8.64429 8.35141 8.3514C8.6443 8.05851 8.6443 7.58363 8.35141 7.29074L5.3462 4.28553L8.3514 1.28033Z'
                        fill='#161616'
                      />
                    </svg>
                  </button>
                )}
              </div>
              {errors.phone && <span className={styles['profile-data__error']}>{errors.phone.message}</span>}

              <label htmlFor='companyName' className={styles['profile-data__label']}>
                Название компании
              </label>
              <div className={styles['profile-data__input-wrapper']}>
                <input
                  id='companyName'
                  type='text'
                  placeholder='Введите название компании'
                  className={styles['profile-data__input']}
                  {...register('companyName')}
                />
                {watchAllFields.companyName && (
                  <button
                    type='button'
                    className={styles['profile-data__clear-button']}
                    onClick={() => setValue('companyName', '')}
                    aria-label='Clear input'
                  >
                    <svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.3514 1.28033C8.64429 0.987437 8.64429 0.512563 8.3514 0.21967C8.05851 -0.0732233 7.58363 -0.0732233 7.29074 0.21967L4.28554 3.22487L1.28034 0.21967C0.987446 -0.0732227 0.512572 -0.073223 0.219679 0.21967C-0.073214 0.512563 -0.0732138 0.987437 0.219679 1.28033L3.22488 4.28553L0.21967 7.29074C-0.0732231 7.58363 -0.0732234 8.0585 0.21967 8.3514C0.512563 8.64429 0.987437 8.64429 1.28033 8.3514L4.28554 5.34619L7.29075 8.3514C7.58364 8.64429 8.05851 8.64429 8.35141 8.3514C8.6443 8.05851 8.6443 7.58363 8.35141 7.29074L5.3462 4.28553L8.3514 1.28033Z'
                        fill='#161616'
                      />
                    </svg>
                  </button>
                )}
              </div>
              {errors.companyName && (
                <span className={styles['profile-data__error']}>{errors.companyName.message}</span>
              )}

              <button type='submit' className={styles['profile-data__submit']} disabled={isPopupVisible}>
                Сохранить
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};
