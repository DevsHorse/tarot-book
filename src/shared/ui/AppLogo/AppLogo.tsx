import styles from './AppLogo.module.css';
import cs from 'classnames';
import logoIcon from '@/shared/assets/logo.png';

const AppLogo = () => {
  return (
    <div className={cs(styles.root)}>
      <div className={cs(styles.icon, 'mobile')}>
        <img src={logoIcon} alt='logo image' loading='lazy' />
      </div>
      <div className={styles.title}>TarotBook</div>
      <div className={cs(styles.subtitle, 'desktop')}>
        Tarot & Astrology Readings
      </div>
    </div>
  );
};

export default AppLogo;
