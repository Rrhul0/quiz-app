import { QuizContext } from '@/contexts/quizContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
    const [quizId, setQuizId] = useState<string | null>(null)
    const [answers, setAnswers] = useState<(number | null)[]>(Array(5).fill(null))
    const [questionNumber, setQuestionNumber] = useState(0)
    const [timePassed, setTimePassed] = useState(0)

    return (
        <QuizContext.Provider
            value={{
                quizId,
                questionNumber,
                timePassed,
                answers,
                setAnswers,
                setQuizId,
                setQuestionNumber,
                setTimePassed,
            }}
        >
            <main className='h-screen w-screen bg-slate-100'>
                <Component {...pageProps} />
            </main>
        </QuizContext.Provider>
    )
}
