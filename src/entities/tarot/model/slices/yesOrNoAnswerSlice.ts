import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { YesOrNoAnswerSchema } from '../types/YesOrNoAnswerSchema';
import { getYesOrNoAnswer } from '../services/getYesOrNoAnswer';

const initialState: YesOrNoAnswerSchema = {
  data: null,
  question: null,
  isLoading: false,
  error: undefined,
};

const yesOrNoAnswerSlice = createSlice({
  name: 'yesOrNoSlice',
  initialState,
  reducers: {
    setQuestion(state, action: PayloadAction<string>) {
      state.question = action.payload;
    },
    clear(state) {
      state.data = initialState.data;
      state.question = initialState.question;
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getYesOrNoAnswer.pending, (state: YesOrNoAnswerSchema) => {
        state.isLoading = true;
      })
      .addCase(
        getYesOrNoAnswer.fulfilled,
        (state: YesOrNoAnswerSchema, action) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        getYesOrNoAnswer.rejected,
        (state: YesOrNoAnswerSchema, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { reducer: yesOrNoAnswerReducer, actions: yesOrNoAnswerActions } =
  yesOrNoAnswerSlice;
