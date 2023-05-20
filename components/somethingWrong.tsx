import Link from 'next/link'

export default function SomethingWrong() {
    return (
        <div className='flex h-screen w-screen flex-col items-center justify-center gap-4'>
            Something went wrong, Return to{' '}
            <Link href='/' className='text-xl text-blue-600 underline'>
                Home
            </Link>
        </div>
    )
}
