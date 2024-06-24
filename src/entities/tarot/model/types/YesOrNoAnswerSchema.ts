import { YesOrNoAnswer } from './YesOrNoAnswer';

export interface YesOrNoAnswerSchema {
  data: YesOrNoAnswer | null;
  question: string | null;
  isLoading: boolean;
  error: string | undefined;
}
