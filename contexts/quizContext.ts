import { createContext, Dispatch, SetStateAction } from 'react'

export const QuizContext = createContext<QuizContextType>({
    quizId: null,
    setQuizId: () => {},
    questionNumber: 0,
    setQuestionNumber: () => {},
    answers: Array(5).fill(null),
    setAnswers: () => {},
    timePassed: 0,
    setTimePassed: () => {},
})

export interface QuizContextType {
    quizId: null | string
    questionNumber: number
    timePassed: number
    answers: (number | null)[]
    setQuizId: Dispatch<SetStateAction<string | null>>
    setQuestionNumber: Dispatch<SetStateAction<number>>
    setTimePassed: Dispatch<SetStateAction<number>>
    setAnswers: Dispatch<SetStateAction<(number | null)[]>>
}
