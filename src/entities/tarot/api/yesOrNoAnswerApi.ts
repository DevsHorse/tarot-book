import axios from 'axios';

const yesOrNoAnswerApi = axios.create({
  baseURL: 'https://api.openai.com',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_OPEN_AI_ACCESS_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default yesOrNoAnswerApi;
