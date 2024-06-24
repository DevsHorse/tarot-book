import styles from './Header.module.css';
import { DesktopContent } from '../DesktopContent';
import { MobileContent } from '../MobileContent';
import { Container } from '@/shared/ui/Container';

const Header = () => {
  return (
    <header className={styles.root}>
      <Container>
        <DesktopContent />
        <MobileContent />
      </Container>
      <div className={styles.backdrop} />
    </header>
  );
};

export default Header;
