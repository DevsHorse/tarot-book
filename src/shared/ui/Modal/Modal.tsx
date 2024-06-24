import { FC, PropsWithChildren } from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.css';
import cs from 'classnames';

ReactModal.setAppElement('#root');

type PropsType = {
  modalClassName?: string;
  overlayClassName?: string;
  isOpen: boolean;
  onClose: () => void;
} & PropsWithChildren;

const Modal: FC<PropsType> = ({
  isOpen,
  onClose,
  modalClassName,
  overlayClassName,
  children,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={cs(styles.modal, modalClassName)}
      overlayClassName={cs(styles.overlay, overlayClassName)}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
