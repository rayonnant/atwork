import styles from './Loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <span className={styles.loader__spinner}></span>
    </div>
  );
};
