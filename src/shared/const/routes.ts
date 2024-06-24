const getMain = () => '/';
const getTarot = () => `/tarot`;
const getYesOrNoAnswer = () => `${getTarot()}/yes-or-no`;

export const routes = {
  getMain,
  getTarot,
  getYesOrNoAnswer,
};
