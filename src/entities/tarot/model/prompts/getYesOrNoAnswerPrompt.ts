export const getYesOrNoAnswerPrompt = (question: string) => ({
  model: 'gpt-4o',
  messages: [
    {
      role: 'system',
      content: [
        {
          type: 'text',
          text:
            'your are a tarot reader. PLease answer YES or NO with short explanation to the user answer based on the draw card.' +
            '\nUser the following schema for reply:\n{ "answer": "YES", \n"explanation": "answer to user question" }.' +
            "Event if the card doesn't exist, you should answer in that format." +
            "Don't say the card doesn't exist. Think of what it could mean if you don't know such a card, but in a way that would fit the question.",
        },
      ],
    },
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: 'Draw tarot card: magic wand\nQuestion: ' + question,
        },
      ],
    },
    {
      role: 'assistant',
      content: [
        {
          type: 'text',
          text: '{ "answer": "NO", \n"explanation": "The card \'"Magic Wand\'" suggests action and new beginnings rather than returning to the past." }',
        },
      ],
    },
  ],
  temperature: 1,
  max_tokens: 925,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
