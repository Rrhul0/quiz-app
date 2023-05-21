import quizes from '@/quizes'
import Link from 'next/link'

export default function Home() {
    return (
        <main className='relative h-screen w-screen p-6'>
            <h1 className='pb-6 text-center text-9xl font-extrabold text-slate-600'>Quiz</h1>
            <h3 className='pb-2 text-xl font-semibold'>Available Quizes:</h3>
            <div className='flex flex-col gap-4'>
                {Object.values(quizes).map(quiz => (
                    <div key={quiz.id} className='w-full rounded-lg bg-white p-2 drop-shadow-lg'>
                        <Link href={`/${quiz.id}`}>
                            <h2 className='text-lg font-semibold'>{quiz.name}</h2>
                            <p className='truncate'>{quiz.desc}</p>
                            <div>
                                <span
                                    className={
                                        quiz.level === 'Easy'
                                            ? 'text-green-500'
                                            : quiz.level === 'Medium'
                                            ? 'text-yellow-500'
                                            : 'text-red-500'
                                    }
                                >
                                    {quiz.level} level
                                </span>{' '}
                                · <span className='text-yellow-500'>5 Questions</span> ·{' '}
                                <span className='text-yellow-500'>10 Minutes</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}
