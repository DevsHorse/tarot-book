import { configureStore } from '@reduxjs/toolkit';
import { yesOrNoAnswerReducer } from '@/entities/tarot';

function createStore() {
  return configureStore({
    reducer: {
      yesOrNoAnswer: yesOrNoAnswerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
}

export const appStore = createStore();
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
