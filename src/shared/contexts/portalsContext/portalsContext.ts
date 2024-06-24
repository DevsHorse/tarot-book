import { createContext } from 'react';
import { PortalsContextSchema } from './types';

export const PortalsContext = createContext<PortalsContextSchema>({
  mobileHeaderSlotNode: null,
  setMobileHeaderSlotNode: (_) => _,
});
