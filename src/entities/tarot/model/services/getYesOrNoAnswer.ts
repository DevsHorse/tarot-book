import { createAsyncThunk } from '@reduxjs/toolkit';
import { yesOrNoAnswerApi } from '../../api';
import { YesOrNoAnswer } from '../types/YesOrNoAnswer';
import { yesOrNoAnswerActions } from '../slices/yesOrNoAnswerSlice';
import { getYesOrNoAnswerPrompt } from '../prompts/getYesOrNoAnswerPrompt';
import { getThunkError } from '@/shared/model/getThunkError';

export const getYesOrNoAnswer = createAsyncThunk<
  YesOrNoAnswer,
  { question: string },
  { rejectValue: string }
>('yesOrNoAnswer/getAnswer', async (data, thunkApi) => {
  thunkApi.dispatch(yesOrNoAnswerActions.setQuestion(data.question));

  try {
    const response = await yesOrNoAnswerApi.post(
      '/v1/chat/completions',
      getYesOrNoAnswerPrompt(data.question)
    );

    const content: YesOrNoAnswer = JSON.parse(
      response?.data?.choices?.[0]?.message?.content || '{}'
    );

    if (!content.answer || !content.explanation) {
      return thunkApi.rejectWithValue(
        getThunkError(new Error('Incorrect answer format.'))
      );
    }

    return {
      answer: content.answer,
      explanation: content.explanation,
    };
  } catch (e) {
    return thunkApi.rejectWithValue(getThunkError(e));
  }
});
