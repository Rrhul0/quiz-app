import { QuizContext } from '@/contexts/quizContext'
import { useRouter } from 'next/router'
import { Fragment, useContext, useState } from 'react'

import quizes from '@/quizes'

export default function QuizScreen() {
    const { questionNumber, quizId } = useContext(QuizContext)
    // const [selected, setSelected] = useState

    const quizIds = Object.keys(quizes)

    if (!quizId || !quizIds.includes(quizId)) return <div>Something went wrong</div>
    const quiz = quizes.webd

    const question = quiz.questions[questionNumber]

    return (
        <main className='p-6'>
            <h1 className=' text-5xl font-extrabold'>Quiz</h1>
            <h2>{quiz.name}</h2>
            <div className='font-semibold text-yellow-400'>
                Question <span className='tracking-widest'>{questionNumber}/5</span>
            </div>
            <div className='text-xl font-semibold'>{question.question}</div>
            <div className='flex flex-col gap-6 px-4'>
                {question.options.map((option, index) => (
                    <label
                        className='flex items-center gap-8 rounded-xl bg-white py-4 pl-7 text-2xl drop-shadow-lg peer-checked:bg-red-600'
                        key={option}
                    >
                        <input
                            type='radio'
                            name='answer'
                            value={option}
                            id={option}
                            key={index}
                            className='peer h-7 w-7'
                        />
                        {option}
                    </label>
                ))}
            </div>
        </main>
    )
}
