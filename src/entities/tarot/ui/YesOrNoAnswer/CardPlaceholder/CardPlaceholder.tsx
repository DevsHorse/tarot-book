import { memo } from 'react';
import styles from './CardPlaceholder.module.css';
import cs from 'classnames';
import cardUrl from '@/shared/assets/yesOrNoAnswer/card-1.png';
import mobileCardUrl from '@/shared/assets/yesOrNoAnswer/card-3.png';

const CardPlaceholder = memo(() => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Let’s check what awaits you in career and finances in the near future
      </div>
      <div className={cs(styles.images, styles.desktopImages, 'desktop')}>
        <img src={cardUrl} alt='tarot card' loading='lazy' />
        <img src={cardUrl} alt='tarot card' loading='lazy' />
        <img src={cardUrl} alt='tarot card' loading='lazy' />
      </div>
      <div className={cs(styles.images, styles.mobileImages, 'mobile')}>
        <img src={mobileCardUrl} alt='tarot card' loading='lazy' />
        <img src={mobileCardUrl} alt='tarot card' loading='lazy' />
        <img src={mobileCardUrl} alt='tarot card' loading='lazy' />
      </div>
      <div className={styles.text}>Take a deep breath</div>
    </div>
  );
});

export default CardPlaceholder;
