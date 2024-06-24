import { Dispatch, SetStateAction } from 'react';

export interface PortalsContextSchema {
  mobileHeaderSlotNode: HTMLDivElement | null;
  setMobileHeaderSlotNode: Dispatch<SetStateAction<HTMLDivElement | null>>;
}
