import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import cs from 'classnames';
import { SearchIcon } from '../icons/SearchIcon';

type PropsType = {
  className?: string;
  navItems: { name: string; path: string }[];
  onRouteChange?: () => void;
};

const Navbar: FC<PropsType> = ({ navItems, className, onRouteChange }) => {
  return (
    <div className={cs(styles.root, className)}>
      {navItems.map((navItem) => (
        <Link key={navItem.name} to={navItem.path} onClick={onRouteChange}>
          <div className={styles.navItem}>{navItem.name}</div>
        </Link>
      ))}
      <div className={styles.searchButton}>
        <SearchIcon className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default Navbar;
