import styles from './EditPage.module.scss';
import manWebp from "@/assets/images/man.webp";
import manPNG from "@/assets/images/man.png";
import { useForm } from "react-hook-form";
import { formSchema, type FormSchema } from "@/utils/userFormSchema";
import {BackButton} from "@components/BackButton/BackButton.tsx";

export const EditPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormSchema>();

  const onSubmit = (data: unknown) => {
    const parsed = formSchema.safeParse(data);
    if (!parsed.success) {
      parsed.error.errors.forEach((err) => {
        setError(err.path[0] as keyof FormSchema, {
          type: "manual",
          message: err.message,
        });
      });
      return;
    }

    console.log(parsed.data);
  };

  return (
    <main className={styles.main}>
      <div className='wrapper'>
        <BackButton/>
        <section className={styles['settings__section']}>
          <picture className={styles['settings__photo-wrapper']}>
            <source srcSet={manWebp} type='image/webp'/>
            <img src={manPNG} alt='Photo' className={styles.settings__photo}/>
          </picture>
          <ul className="setting__options">
            <li className="setting__options__item">Данные профиля</li>
            <li className="setting__options__item">Рабочее пространство</li>
            <li className="setting__options__item">Приватность</li>
            <li className="setting__options__item">Безопасность</li>
          </ul>
        </section>

        <section className="profile-data__section">
          <h2 className="profile-data__title">Данные профиля</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="name" className="profile-data__label">
              Имя
            </label>
            <input
                id="name"
                type="text"
                placeholder="Введите имя"
                className="profile-data__input"
                {...register("name")}
            />
            {errors.name && (
                <span className="profile-data__error">
                {errors.name.message}
              </span>
            )}

            <label htmlFor="nickname" className="profile-data__label">
              Никнейм
            </label>
            <input
                id="nickname"
                type="text"
                placeholder="Введите никнейм"
                className="profile-data__input"
                {...register("nickname")}
            />
            {errors.nickname && (
                <span className="profile-data__error">
                {errors.nickname.message}
              </span>
            )}

            <label htmlFor="email" className="profile-data__label">
              Почта
            </label>
            <input
                id="email"
                type="email"
                placeholder="Введите email"
                className="profile-data__input"
                {...register("email")}
            />
            {errors.email && (
                <span className="profile-data__error">
                {errors.email.message}
              </span>
            )}

            <label htmlFor="city" className="profile-data__label">
              Город
            </label>
            <input
                id="city"
                type="text"
                placeholder="Введите ваш город"
                className="profile-data__input"
                {...register("city")}
            />
            {errors.city && (
                <span className="profile-data__error">
                {errors.city.message}
              </span>
            )}

            <label htmlFor="phone" className="profile-data__label">
              Телефон
            </label>
            <input
                id="phone"
                type="text"
                placeholder="Введите ваш номер телефона"
                className="profile-data__input"
                {...register("phone")}
            />
            {errors.phone && (
                <span className="profile-data__error">
                {errors.phone.message}
              </span>
            )}

            <label htmlFor="companyName" className="profile-data__label">
              Название компании
            </label>
            <input
                id="companyName"
                type="text"
                placeholder="Введите название компании"
                className="profile-data__input"
                {...register("companyName")}
            />
            {errors.companyName && (
                <span className="profile-data__error">
                {errors.companyName.message}
              </span>
            )}

            <button type="submit" className="profile-data__submit">
              Сохранить
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};
