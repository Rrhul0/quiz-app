import { QuizContext } from '@/contexts/quizContext'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import quizes from '@/quizes'
import SomethingWrong from '@/components/somethingWrong'
import formatTime from '@/lib/formatTime'

const quizIds = Object.keys(quizes)

export default function QuizScreen() {
    const { questionNumber, quizId, setQuestionNumber, setAnswers, answers, timePassed, setTimePassed } =
        useContext(QuizContext)
    const router = useRouter()

    useEffect(() => {
        let intervalId: NodeJS.Timer
        intervalId = setInterval(tick, 1000)

        return () => clearInterval(intervalId)
    }, [])

    function tick() {
        setTimePassed(sec => sec + 1)
    }

    // automatically submit the quiz after time is over
    if (timePassed >= 10 * 60) router.replace('/result')

    const timeLeft = 10 * 60 - timePassed
    const { minutes, seconds } = formatTime(timeLeft)

    if (!quizId || !quizIds.includes(quizId)) return <SomethingWrong />
    const quiz = quizes.webd

    const question = quiz.questions[questionNumber]

    function answerQuestion(index: number) {
        setAnswers(ans => {
            ans[questionNumber] = index
            return [...ans]
        })
    }

    return (
        <main className='flex h-screen flex-col justify-between p-6'>
            <section>
                <h1 className=' py-4 text-5xl font-extrabold text-slate-600'>Quiz</h1>
                <h2 className='text-2xl'>{quiz.name}</h2>
                <div className='flex items-center justify-between pt-6'>
                    <div className='text-lg font-semibold text-yellow-400'>
                        Question <span className='tracking-widest'>{questionNumber + 1}/5</span>
                    </div>
                    <div className='rounded-full bg-slate-500 px-3 py-1 text-slate-100'>
                        {minutes}:{seconds}
                    </div>
                </div>
                <div className='py-2 text-2xl font-semibold'>{question.question}</div>
            </section>
            <section>
                <div className='flex flex-col gap-6'>
                    {question.options.map((option, index) => (
                        <button
                            onClick={() => answerQuestion(index)}
                            className={`flex items-center gap-8 rounded-xl py-5 pl-7 text-3xl drop-shadow-lg ${
                                answers[questionNumber] === index ? 'bg-slate-500' : 'bg-white'
                            }`}
                            key={option}
                        >
                            <span className='aspect-square h-10 rounded-lg border border-blue-600 '>{index + 1}</span>
                            {option}
                        </button>
                    ))}
                </div>
                <div className='flex justify-center gap-4 pt-4'>
                    {questionNumber !== 4 ? (
                        <button
                            onClick={() => setQuestionNumber(num => num + 1)}
                            className='rounded-full bg-slate-600 px-6 py-2 font-semibold text-white'
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={() => router.replace('/result')}
                            // by this if user try to click back after submit
                            //they will go direct to home page and not able to change answers
                            className='rounded-full bg-slate-600 px-6 py-2 font-semibold text-white'
                        >
                            Submit
                        </button>
                    )}
                    {questionNumber !== 0 && (
                        <button
                            onClick={() => setQuestionNumber(num => num - 1)}
                            className='underline underline-offset-4'
                        >
                            previous
                        </button>
                    )}
                </div>
            </section>
        </main>
    )
}
