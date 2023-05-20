import { QuizContext } from '@/contexts/quizContext'
import quizes from '@/quizes'
import Link from 'next/link'
import { useContext } from 'react'

const quizIds = Object.keys(quizes)

export default function ResultPage() {
    const { quizId, answers } = useContext(QuizContext)

    if (!quizId || !quizIds.includes(quizId))
        return (
            <div>
                Something went wrong, Return to <Link href='/'>Home</Link>
            </div>
        )

    const quiz = quizes.webd

    let correct = 0
    let incorrect = 0

    answers.forEach((answer, index) => {
        if (quiz.questions[index].correctOptionIndex === answer) correct++
        else incorrect++
    })

    const score = (correct / 5) * 100

    return (
        <div className='bg-slate-100 p-4'>
            <h1 className=' py-4 text-5xl font-extrabold'>Quiz</h1>
            <h2 className='py-4 text-center text-2xl'>{quiz.name} Quiz</h2>
            <div className='mx-2 flex flex-col items-center gap-3 rounded-2xl border bg-white p-4 text-center drop-shadow-lg'>
                <div className='text-lg text-green-600'>You Scored:</div>
                <div className='text-3xl font-semibold text-purple-500'>{score}%</div>
                <p className='text-lg font-bold'>Oh Snap, You can do better!</p>
                <p className='px-4 '>
                    Success is not final, failure is not fatal; It is the courage to continue that counts.
                </p>
            </div>
            <div className='flex justify-between p-8'>
                <div>
                    <div className='font-semibold'>Your Score</div>
                    <div className='text-3xl font-bold tracking-wide text-purple-500'>{correct}/5</div>
                </div>
                <div>
                    <div className='font-semibold'>Time Taken</div>
                    <div className='text-3xl font-bold tracking-wide text-purple-500'>
                        02:50<span className='text-base font-semibold tracking-normal text-black'> mins</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
