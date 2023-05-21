import quizes from '@/quizes'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

export default function Home() {
    return (
        <>
            <main className='relative h-[calc(100vh-60px)] w-screen p-6'>
                <h1 className='pb-6 text-center text-9xl font-extrabold text-slate-600'>Quiz</h1>
                <h3 className='pb-2 text-xl font-semibold sm:px-10 md:px-32 lg:px-48'>Available Quizes:</h3>
                <div className='flex flex-col gap-4 sm:px-10 md:px-32 lg:px-48'>
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
            <footer className='flex h-[60px] items-center justify-center border-t text-lg'>
                <a
                    href='https://github.com/Rrhul0/quiz-app'
                    target={'_blank'}
                    className='flex items-center gap-1 underline underline-offset-4'
                >
                    GitHub <FiExternalLink />
                </a>
            </footer>
        </>
    )
}
