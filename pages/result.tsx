import SomethingWrong from '@/components/somethingWrong'
import { QuizContext } from '@/contexts/quizContext'
import formatTime from '@/lib/formatTime'
import quizes from '@/quizes'
import Link from 'next/link'
import { useContext } from 'react'

const quizIds = Object.keys(quizes)

export default function ResultPage() {
    const { quizId, answers, timePassed } = useContext(QuizContext)

    if (!quizId || !quizIds.includes(quizId)) return <SomethingWrong />

    const quiz = quizes.webd

    let correct = 0
    let incorrect = 0

    answers.forEach((answer, index) => {
        if (quiz.questions[index].correctOptionIndex === answer) correct++
        else incorrect++
    })

    const score = (correct / 5) * 100

    const { minutes: passedMinutes, seconds: passedSeconds } = formatTime(timePassed)
    const { minutes: avgMinutes, seconds: avgSeconds } = formatTime(quiz.avarageTimeTaken)

    return (
        <div className='bg-slate-100 p-4'>
            <h1 className=' py-4 text-5xl font-extrabold text-slate-600'>Quiz</h1>
            <h2 className='py-4 text-center text-2xl'>{quiz.name} Quiz</h2>
            <div className='mx-2 flex flex-col items-center gap-3 rounded-2xl border bg-white p-4 text-center drop-shadow-lg'>
                <div className='text-lg text-green-600'>You Scored:</div>
                <div className='text-3xl font-semibold text-purple-500'>{score}%</div>
                <p className='text-lg font-bold'>
                    {score <= 40
                        ? 'Oh Snap, You can do better!'
                        : score <= 60
                        ? 'Good, But you can do better!'
                        : 'Great, You did fantastic!'}
                </p>
                <p className='px-4 '>
                    {score <= 40
                        ? 'Success is not final, failure is not fatal; It is the courage to continue that counts.'
                        : score <= 60
                        ? 'Embrace each challenge as an opportunity to learn, grow, and do better than before.'
                        : "You've done great, and I encourage you to keep up the excellent work!"}
                </p>
            </div>
            <div className='flex justify-between p-8'>
                <div>
                    <div className='font-semibold'>Your Score</div>
                    <div className='text-3xl font-bold tracking-wide text-purple-500'>{correct}/5</div>
                    <div className='pt-2 text-sm'>Avg. Score: {quiz.avarageScore}</div>
                </div>
                <div>
                    <div className='font-semibold'>Time Taken</div>
                    <div className='text-3xl font-bold tracking-wide text-purple-500'>
                        {passedMinutes}:{passedSeconds}
                        <span className='text-base font-semibold tracking-normal text-black'> mins</span>
                    </div>
                    <div className='pt-2 text-sm '>
                        Avg. Time: {avgMinutes}:{avgSeconds} mins
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center pt-8'>
                <Link href='/' className='rounded-full bg-slate-600 px-6 py-2 font-semibold text-white'>
                    Return to Home
                </Link>
            </div>
        </div>
    )
}
