import { Link } from 'react-router-dom';
import styles from './DesktopContent.module.css';
import { desktopNavigationItems } from '../../config';
import { ContentContainer } from '../ContentContainer';
import { UserTile } from '@/entities/user';
import { routes } from '@/shared/const/routes';
import { AppLogo } from '@/shared/ui/AppLogo';
import { Navbar } from '@/shared/ui/Navbar';

const DesktopContent = () => {
  return (
    <ContentContainer className='desktop'>
      <Link to={routes.getMain()}>
        <AppLogo />
      </Link>
      <Navbar navItems={desktopNavigationItems} />
      <UserTile className={styles.userTile} name='Samanta Johnson' />
    </ContentContainer>
  );
};

export default DesktopContent;
