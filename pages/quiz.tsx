import { QuizContext } from '@/contexts/quizContext'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import quizes from '@/quizes'
import Link from 'next/link'

export default function QuizScreen() {
    const { questionNumber, quizId, setQuestionNumber, setAnswers, answers } = useContext(QuizContext)

    const quizIds = Object.keys(quizes)

    if (!quizId || !quizIds.includes(quizId))
        return (
            <div>
                Something went wrong, Return to <Link href='/'>Home</Link>
            </div>
        )
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
                <h1 className=' py-4 text-5xl font-extrabold'>Quiz</h1>
                <h2 className='text-2xl'>{quiz.name}</h2>
                <div className='pt-8 text-lg font-semibold text-yellow-400'>
                    Question <span className='tracking-widest'>{questionNumber + 1}/5</span>
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
                        <Link href='/result' className='rounded-full bg-slate-600 px-6 py-2 font-semibold text-white'>
                            Submit
                        </Link>
                    )}
                    <button onClick={() => setQuestionNumber(num => num - 1)} className='underline underline-offset-4'>
                        previous
                    </button>
                </div>
            </section>
        </main>
    )
}
