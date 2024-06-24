import { FC, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type PropsType = PropsWithChildren & LinkProps;

const ConditionalLink: FC<PropsType> = ({ children, to, ...props }) => {
  if (to) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  }
  return children;
};

export default ConditionalLink;
