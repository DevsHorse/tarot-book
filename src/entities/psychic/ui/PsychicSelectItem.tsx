import { FC, HTMLAttributes } from 'react';
import styles from './PsychicSelectItem.module.css';
import cs from 'classnames';
import { Psychic } from '../model';
import { DoneIcon } from '@/shared/ui/icons/DoneIcon';

type PropsType = {
  isChecked?: boolean;
  psychic: Psychic;
} & HTMLAttributes<HTMLDivElement>;

const PsychicSelectItem: FC<PropsType> = ({
  isChecked,
  psychic,
  className,
  ...props
}) => {
  return (
    <div
      className={cs(styles.root, className, { [styles.checked]: isChecked })}
      {...props}
    >
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}>
          <img src={psychic.avatarUrl} alt='spychic avatar' loading='lazy' />
        </div>
        <div className={styles.checkCircle}>
          <DoneIcon />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{psychic.name}</div>
        <div className={styles.price}>${psychic.price}/min</div>
      </div>
    </div>
  );
};

export default PsychicSelectItem;
