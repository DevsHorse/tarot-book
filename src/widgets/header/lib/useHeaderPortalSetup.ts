import { usePortalsContext } from '@/shared/contexts/portalsContext';
import { useEffect, useRef } from 'react';

const useHeaderPortalSetup = () => {
  const { setMobileHeaderSlotNode } = usePortalsContext();
  const ref = useRef(null);

  useEffect(() => {
    setMobileHeaderSlotNode(ref.current);
  }, [setMobileHeaderSlotNode]);

  return { portalContainerRef: ref };
};

export default useHeaderPortalSetup;
