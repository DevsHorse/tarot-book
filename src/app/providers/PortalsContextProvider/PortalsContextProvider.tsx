import { FC, PropsWithChildren, useState } from 'react';
import {
  PortalsContext,
  PortalsContextSchema,
} from '@/shared/contexts/portalsContext';

type PropsType = PropsWithChildren;

const PortalsContextProvider: FC<PropsType> = ({ children }) => {
  const [mobileHeaderSlotNode, setMobileHeaderSlotNode] =
    useState<PortalsContextSchema['mobileHeaderSlotNode']>(null);

  return (
    <PortalsContext.Provider
      value={{
        mobileHeaderSlotNode,
        setMobileHeaderSlotNode,
      }}
    >
      {children}
    </PortalsContext.Provider>
  );
};

export default PortalsContextProvider;
