import defaultAvatarUrl from '@/shared/assets/mock-avatar.png';
import { FC } from 'react';
import styles from './UserTile.module.css';
import cs from 'classnames';

type PropsType = {
  name: string;
  avatarUrl?: Url;
  className?: string;
  reversed?: boolean;
};

const UserTile: FC<PropsType> = ({ name, avatarUrl, className, reversed }) => {
  return (
    <div
      className={cs(styles.root, { [styles.reversed]: reversed }, className)}
    >
      <div className={styles.name}>{name || 'User Name'}</div>
      <div className={styles.avatar}>
        <img
          src={avatarUrl || defaultAvatarUrl}
          alt='user photo'
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default UserTile;
