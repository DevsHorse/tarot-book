import React, { FC } from 'react';
import styles from './Breadcrumbs.module.css';
import { BreadcrumbItem } from '../../model';
import { DashIcon } from '../../../icons/DashIcon';
import { ConditionalLink } from '../../../ConditionalLink';

type PropsType = {
  items: BreadcrumbItem[];
};

const Breadcrumbs: FC<PropsType> = ({ items }) => {
  return (
    <div className={styles.root}>
      {items.map((item, index) => (
        <React.Fragment key={item.name}>
          {index !== 0 && <DashIcon />}
          <ConditionalLink to={item.path || ''}>
            <div className={styles.breadcrumbItem}>{item.name}</div>
          </ConditionalLink>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
