import { useContext } from 'react';
import { PortalsContext } from './portalsContext';

export const usePortalsContext = () => {
  return useContext(PortalsContext);
};
