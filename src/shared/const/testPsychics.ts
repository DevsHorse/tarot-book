import avatarUrl1 from '@/shared/assets/psychics/psychic-avatar-1.png';
import avatarUrl2 from '@/shared/assets/psychics/psychic-avatar-2.png';
import avatarUrl3 from '@/shared/assets/psychics/psychic-avatar-3.png';

const id = () => String(Math.ceil(Math.random() * 1000000));

export const testPsychics = [
  { id: id(), name: 'Darrell S.', price: 12.99, avatarUrl: avatarUrl1 },
  { id: id(), name: 'Darrell S.', price: 12.99, avatarUrl: avatarUrl2 },
  { id: id(), name: 'Darrell S.', price: 12.99, avatarUrl: avatarUrl3 },
  { id: id(), name: 'Darrell S.', price: 12.99, avatarUrl: avatarUrl1 },
];
