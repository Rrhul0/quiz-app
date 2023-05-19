import { createContext, Dispatch, SetStateAction } from 'react'

export const QuizContext = createContext<QuizContextType>({
    quizId: null,
    setQuizId: () => {},
    questionNumber: 0,
    setQuestionNumber: () => {},
    timePassed: 0,
    setTimePassed: () => {},
})

export interface QuizContextType {
    quizId: null | string
    questionNumber: number
    timePassed: number
    setQuizId: Dispatch<SetStateAction<string | null>>
    setQuestionNumber: Dispatch<SetStateAction<number>>
    setTimePassed: Dispatch<SetStateAction<number>>
}
