import { FC, PropsWithChildren } from 'react';
import styles from './PageContentLayout.module.css';
import cs from 'classnames';
import { Container } from '@/shared/ui/Container';

type PropsType = { className?: string } & PropsWithChildren;

const PageContentLayout: FC<PropsType> = ({ children, className }) => {
  return (
    <Container className={cs(styles.root, className)}>{children}</Container>
  );
};

export default PageContentLayout;
