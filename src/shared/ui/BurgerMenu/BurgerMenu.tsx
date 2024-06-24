import {
  FC,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useState,
} from 'react';
import styles from './BurgerMenu.module.css';
import cs from 'classnames';
import { Button } from '../Button';
import { BurgerIcon } from '../icons/BurgerIcon';
import { CloseIcon } from '../icons/CloseIcon';

type PropsType = {
  className?: string;
  menuSlot: (props: { close: () => void }) => ReactElement;
} & PropsWithChildren;

const BurgerMenu: FC<PropsType> = ({ menuSlot, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={cs(styles.root, className)}>
      <Button className={cs(styles.button, styles.openButton)} onClick={onOpen}>
        <BurgerIcon className={styles.burgerIcon} />
      </Button>
      <div
        className={cs(styles.background, { [styles.opened]: isOpen })}
        onClick={onClose}
      />
      <div className={cs(styles.menu, { [styles.opened]: isOpen })}>
        <div className={styles.menuBgFilter} />
        <div className={styles.menuInner}>
          <div className={styles.menuHeader}>
            <Button
              className={cs(styles.button, styles.closeButton)}
              variant='white'
              onClick={onClose}
            >
              <CloseIcon className={styles.closeIcon} />
            </Button>
          </div>
          <div className={styles.menuContent}>
            {menuSlot({ close: onClose })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
