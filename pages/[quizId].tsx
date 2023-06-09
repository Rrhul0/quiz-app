import { QuizContext } from '@/contexts/quizContext'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { BiTimeFive, BiErrorCircle } from 'react-icons/bi'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { TbFileCertificate, TbCircleNumber1 } from 'react-icons/tb'
import { useRouter } from 'next/router'
import SomethingWrong from '@/components/somethingWrong'
import quizes from '@/quizes'

const quizIds = Object.keys(quizes)

export default function QuizHome() {
    const [startQuiz, setStartQuiz] = useState(false)
    const { setQuizId, setQuestionNumber, setAnswers, setTimePassed } = useContext(QuizContext)

    const router = useRouter()
    const quizId = router.query.quizId
    if (typeof quizId !== 'string') return <SomethingWrong />

    if (!quizId || !quizIds.includes(quizId)) return <SomethingWrong />
    const quiz = quizes[quizId]

    return (
        <main className='relative flex min-h-full w-full flex-col justify-between bg-slate-100 p-6'>
            <section>
                <h1 className='pb-6 text-center text-9xl font-extrabold text-slate-600'>Quiz</h1>
                <h2 className='pb-2 text-2xl font-bold'>{quiz.name}</h2>
                <h3
                    className={
                        quiz.level === 'Easy'
                            ? 'text-green-500'
                            : quiz.level === 'Medium'
                            ? 'text-yellow-500'
                            : 'text-red-500'
                    }
                >
                    {quiz.level} level
                </h3>
                <p className='pt-2'>{quiz.desc}</p>
            </section>
            <section className=''>
                <h3 className='py-4 text-2xl font-bold'>This Quiz Includes</h3>
                <ul className='flex flex-col gap-4 text-xl'>
                    <li className='flex items-center gap-2'>
                        <TbFileCertificate size={30} className='text-purple-600' />
                        50% Passing Criteria
                    </li>
                    <li className='flex items-center gap-2'>
                        <AiOutlineQuestionCircle size={28} className='text-purple-600' />5 Questions (All compulsory)
                    </li>
                    <li className='flex items-center gap-2'>
                        <BiTimeFive size={30} className='text-purple-600' />
                        10 Minutes
                    </li>
                    <li className='flex items-center gap-2'>
                        <TbCircleNumber1 size={30} className='text-purple-600' />1 Daily Attempt
                    </li>
                </ul>
                <div className='flex justify-center pt-4'>
                    <button
                        onClick={() => setStartQuiz(previousValue => !previousValue)}
                        className='rounded-full bg-slate-600 px-6 py-2 font-semibold text-white'
                    >
                        Take Quiz
                    </button>
                </div>
            </section>
            {startQuiz && (
                <div className='absolute inset-0 z-10 flex flex-col bg-slate-300 bg-opacity-40'>
                    <button onClick={() => setStartQuiz(false)} className='h-full w-full'></button>
                    <div className='flex flex-col items-center gap-8 rounded-t-2xl bg-white p-6'>
                        <h3 className='text-3xl font-bold'>Quiz Rules</h3>
                        <ul className='flex flex-col gap-6 '>
                            <li className='flex items-center gap-4'>
                                <BiTimeFive size={50} className='text-purple-600' />
                                <div>
                                    <p className='text-lg font-semibold'>10 Minutes</p>
                                    <p>Keep in mind that it&apos;s time-bound.</p>
                                </div>
                            </li>
                            <li className='flex items-center gap-4 '>
                                <AiOutlineQuestionCircle size={45} className='text-purple-600' />
                                <div>
                                    <p className='text-lg font-semibold'>5 Questions (All compulsory)</p>
                                    <p>We believe that you will ace it!</p>
                                </div>
                            </li>
                            <li className='flex items-center gap-4 '>
                                <TbFileCertificate size={45} className='text-purple-600' />
                                <div>
                                    <p className='text-lg font-semibold'>50% Passing Criteria</p>
                                    <p>All the best! See you on the other side.</p>
                                </div>
                            </li>
                        </ul>
                        <div className='flex items-center gap-1 rounded-lg bg-slate-200 p-1'>
                            <BiErrorCircle className='text-purple-600' />
                            <p>This quiz can only be attempted once daily.</p>
                        </div>
                        <div className='flex justify-center'>
                            <Link
                                className='rounded-full bg-slate-600 px-6 py-2 font-semibold text-white'
                                onClick={() => {
                                    setQuizId(quizId)
                                    setQuestionNumber(0)
                                    setAnswers(Array(5).fill(null))
                                    setTimePassed(0)
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
