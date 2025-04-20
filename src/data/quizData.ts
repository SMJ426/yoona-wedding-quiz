import { QuizItem } from './quizType';

export const quizData: QuizItem[] = [
  {
    question: '희도와 유나가 만난날은?',
    options: [
      '2020년 3월 30일',
      '2020년 4월 14일',
      '2020년 4월 26일',
      '2020년 11월 26일',
    ],
    answer: '2020년 4월 26일',
  },
  {
    question: '신랑 부모님과 신부 부모님의 나이를 큰 나이순대로 나열 한 것은?',
    options: [
      '유나 부 > 희도 부 > 유나 모 > 희도 모',
      '유나 부 > 희도 부 > 희도 모 > 유나 모',
      '희도 부 > 유나 부 > 유나 모 > 희도 모',
      '희도 부 > 유나 부 > 희도 모 > 유나 모',
    ],
    answer: '유나 부 > 희도 부 > 유나 모 > 희도 모',
  },
  {
    question: '희도와 유나의 신혼여행지는?',
    options: ['하와이', '코타키나발루', '미국', '영국'],
    answer: '하와이',
  },
  {
    question: '희도의 프로포즈에 대한 유나의 첫마디는?',
    options: [
      '어멋! 감동이야ㅠㅠ',
      '내 대답은 yes야ㅠㅠ',
      '말 없이 눈물을 흘린다',
      '난 아직 마음의 준비가 안됐어..',
      '오빠, 똥마려?',
    ],
    answer: '오빠, 똥마려?',
  },
];

export const questionsData: string[] = quizData.map((item) => item.question);

export const optionsData: string[][] = quizData.map((item) => item.options);

export const answersData: string[] = quizData.map((item) => item.answer);
