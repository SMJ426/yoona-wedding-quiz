import { QuizItem } from './quizType';

export const quizData: QuizItem[] = [
  {
    question: '희도와 유나가\n처음 만난 연도는?',
    options: ['2019년', '2020년', '2021년', '2022년'],
    answerIndex: 1,
  },
  {
    question: '희도와 유나가\n신혼여행 가려는 나라는?',
    options: ['미국', '호주', '스페인', '이탈리아'],

    answerIndex: 1,
  },
  {
    question: '희도의 프로포즈에 대한\n유나의 첫마디는?',
    options: [
      '어멋! 감동이야 ㅠㅠ',
      '내 대답은 yes야!',
      '말 없이 눈물을 흘린다',
      '난 아직 마음의 준비가 안됐어 미안',
      '오빠 똥마려?',
    ],
    answerIndex: 4,
  },
];

export const questionsData: string[] = quizData.map((item) => item.question);

export const optionsData: string[][] = quizData.map((item) => item.options);

export const answersData: number[] = quizData.map((item) => item.answerIndex);
