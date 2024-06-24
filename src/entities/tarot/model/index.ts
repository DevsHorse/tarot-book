import { yesOrNoAnswerSelectors } from './selectors/yesOrNoAnswerSelectors';
import { getYesOrNoAnswer } from './services/getYesOrNoAnswer';
import {
  yesOrNoAnswerActions,
  yesOrNoAnswerReducer,
} from './slices/yesOrNoAnswerSlice';

export { yesOrNoAnswerReducer, yesOrNoAnswerActions, yesOrNoAnswerSelectors };

export const yesOrNoAnswerThunkActions = {
  getYesOrNoAnswer,
};
