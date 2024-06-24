import { yesOrNoAnswerThunkActions } from '@/entities/tarot';
import { useAppDispatch } from '@/shared/model/reduxHooks';
import { FormEvent, useCallback, useState } from 'react';

const useHandleQuestionForm = () => {
  const dispatch = useAppDispatch();
  const [question, setQuestion] = useState<string>('');

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      dispatch(
        yesOrNoAnswerThunkActions.getYesOrNoAnswer({
          question: data.question as string,
        })
      );
    },
    [dispatch]
  );

  return {
    value: question,
    setValue: setQuestion,
    handleSubmit,
  };
};

export default useHandleQuestionForm;
