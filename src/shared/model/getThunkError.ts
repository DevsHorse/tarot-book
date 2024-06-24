export const getThunkError = (error: Error | unknown): string => {
  let returnError = 'Something went wrong...';
  if (error instanceof Error) {
    returnError = error.message;
  }
  return returnError;
};
