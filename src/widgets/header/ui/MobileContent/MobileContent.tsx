import { Link } from 'react-router-dom';
import styles from './MobileContent.module.css';
import { allNavigationItems } from '../../config';
import { useHeaderPortalSetup } from '../../lib';
import { ContentContainer } from '../ContentContainer';
import { UserTile } from '@/entities/user';
import { AppLogo } from '@/shared/ui/AppLogo';
import { BurgerMenu } from '@/shared/ui/BurgerMenu';
import { routes } from '@/shared/const/routes';
import { Navbar } from '@/shared/ui/Navbar';

const MobileContent = () => {
  const { portalContainerRef } = useHeaderPortalSetup();

  return (
    <>
      <ContentContainer className='mobile'>
        <Link to={routes.getMain()}>
          <AppLogo />
        </Link>
        <BurgerMenu
          menuSlot={({ close }) => (
            <div className={styles.burgerMenuContent}>
              <div />
              <Navbar navItems={allNavigationItems} onRouteChange={close} />
              <UserTile name='Samanta Johnson' reversed />
            </div>
          )}
        />
      </ContentContainer>
      <div className='mobile' ref={portalContainerRef} />
    </>
  );
};

export default MobileContent;
