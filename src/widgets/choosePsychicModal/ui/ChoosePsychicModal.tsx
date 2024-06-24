import { FC, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ChoosePsychicModal.module.css';
import cs from 'classnames';
import { PsychicSelectItem } from '@/entities/psychic';
import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';
import { CloseIcon } from '@/shared/ui/icons/CloseIcon';
import { routes } from '@/shared/const/routes';
import { testPsychics } from '@/shared/const/testPsychics';

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
};

const ChoosePsychicModal: FC<PropsType> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [selectedPsychicId, setSelectedPsychicId] = useState<string>('');

  const onSubmit = useCallback(() => {
    if (selectedPsychicId) {
      navigate(routes.getMain());
      onClose();
    }
  }, [navigate, onClose, selectedPsychicId]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} modalClassName={styles.modal}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>Choose the psychic to answer:</div>
          <div className={cs(styles.closeButton, 'desktop')} onClick={onClose}>
            <CloseIcon />
          </div>
          <Link
            className={cs(styles.seeAllButton, 'mobile', 'defaultLinkColors')}
            to={routes.getMain()}
            target='_blank'
          >
            See all
          </Link>
        </div>
        <div className={styles.psychicsList}>
          {testPsychics.map((psychic) => (
            <PsychicSelectItem
              key={psychic.id}
              psychic={psychic}
              isChecked={selectedPsychicId === psychic.id}
              onClick={() => setSelectedPsychicId(psychic.id)}
            />
          ))}
        </div>
        <div className={styles.actions}>
          <Button className={styles.nowButton} onClick={onSubmit}>
            Ask this question now
          </Button>
          <Button className={styles.bookButton} onClick={onSubmit}>
            <span className='desktop'>Book a session at a convenient time</span>
            <span className='mobile'>Book a session</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ChoosePsychicModal;
