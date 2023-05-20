import { QuizContext } from '@/contexts/quizContext'
import Link from 'next/link'
import { useContext, useState } from 'react'

export default function Home() {
    const [startQuiz, setStartQuiz] = useState(false)
    const { setQuizId, setQuestionNumber } = useContext(QuizContext)

    return (
        <main className='h-screen w-screen overflow-hidden p-6'>
            <h1 className='py-6 text-center text-9xl font-extrabold'>Quiz</h1>
            <h2 className='py-4 text-3xl font-bold'>Web development quiz</h2>
            <div>
                Test your web development skills with our engaging quiz! Designed for both beginners and experienced
                developers, this quiz covers HTML, CSS, JavaScript, and popular frameworks. Ready to see how you fare?
                Take our web development quiz now!
            </div>
            <section className='py-4'>
                <h3 className='py-4 text-2xl font-bold'>This Quiz Includes</h3>
                <ul className='flex flex-col gap-2 text-xl'>
                    <li>50% Passing Criteria</li>
                    <li>5 Questions (All compulsory)</li>
                    <li>10 Minutes</li>
                    <li>1 Daily Attempt</li>
                </ul>
            </section>
            <div className='flex justify-center'>
                <button
                    onClick={() => setStartQuiz(previousValue => !previousValue)}
                    className='rounded-full bg-slate-600 px-6 py-2 font-semibold text-white'
                >
                    Take Quiz
                </button>
            </div>
            {startQuiz && (
                <div
                    className='absolute inset-0 z-10 flex h-full flex-col justify-end bg-slate-300 bg-opacity-40'
                    onClick={() => setStartQuiz(false)}
                >
                    <div className='flex flex-col gap-4 rounded-t-2xl bg-white p-6'>
                        <h3 className='py-2 text-2xl font-bold'>Quiz Rules</h3>
                        <ul className='flex flex-col gap-2 text-xl'>
                            <li>50% Passing Criteria</li>
                            <li>5 Questions (All compulsory)</li>
                            <li>10 Minutes</li>
                        </ul>
                        <div className='rounded-lg bg-slate-200 px-3 py-1'>
                            This quiz can only be attempted once daily.
                        </div>
                        <div className='flex justify-center'>
                            <Link
                                className='rounded-full bg-slate-600 px-6 py-2 font-semibold text-white'
                                onClick={() => {
                                    setQuizId('webd')
                                    setQuestionNumber(0)
                                }}
                                href='/quiz'
                            >
                                Start
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
