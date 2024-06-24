const getState = (state: RootState) => state.yesOrNoAnswer;
const answer = (state: RootState) => state.yesOrNoAnswer.data;
const question = (state: RootState) => state.yesOrNoAnswer.question;
const isLoading = (state: RootState) => state.yesOrNoAnswer.isLoading;
const error = (state: RootState) => state.yesOrNoAnswer.error;

export const yesOrNoAnswerSelectors = {
  getState,
  answer,
  question,
  isLoading,
  error,
};
