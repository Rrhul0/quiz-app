const quizes: {
    [key: string]: {
        id: string
        name: string
        desc: string
        avarageScore: number
        avarageTimeTaken: number
        level: 'Easy' | 'Medium' | 'Hard'
        questions: {
            question: string
            options: string[]
            correctOptionIndex: number
        }[]
    }
} = {
    webd: {
        id: 'webd',
        name: 'Web Development',
        desc: 'Test your web development skills with our engaging quiz! Designed for both beginners and experienced developers, this quiz covers HTML, CSS, JavaScript, and popular frameworks. Dive into questions about code syntax, responsive design, best practices, and more. Challenge yourself and compare your knowledge with other developers. Ready to see how you fare? Take our web development quiz now!',
        avarageScore: 4,
        avarageTimeTaken: 94,
        level: 'Easy',
        questions: [
            {
                question: 'Which programming langauge is commonly used in Web development?',
                options: ['C++', 'JavaScript', 'Python', 'Rust'],
                correctOptionIndex: 1,
            },
            {
                question: 'Which one of these are a front-end library?',
                options: ['Django', 'Ruby on rails', 'React', 'Nodejs'],
                correctOptionIndex: 2,
            },
            {
                question: 'Which one of these is not a React hook?',
                options: ['useBrowser', 'useEffect', 'useState', 'useReducer'],
                correctOptionIndex: 0,
            },
            {
                question: 'Which one of these are not a react framwork',
                options: ['Nextjs', 'Remixjs', 'Nuxtjs', 'All of these'],
                correctOptionIndex: 2,
            },
            {
                question: 'What you commonly dont use in web development?',
                options: ['CSS', 'Kotlin', 'Typescript', 'HTML'],
                correctOptionIndex: 1,
            },
        ],
    },
    webd2: {
        id: 'webd2',
        name: 'Web Development level 2',
        desc: 'Test your web development skills with our engaging quiz! Designed for both beginners and experienced developers, this quiz covers HTML, CSS, JavaScript, and popular frameworks. Dive into questions about code syntax, responsive design, best practices, and more. Challenge yourself and compare your knowledge with other developers. Ready to see how you fare? Take our web development quiz now!',
        avarageScore: 3,
        avarageTimeTaken: 156,
        level: 'Medium',
        questions: [
            {
                question: 'Which programming langauge is commonly used in Web development?',
                options: ['C++', 'JavaScript', 'Python', 'Rust'],
                correctOptionIndex: 1,
            },
            {
                question: 'Which one of these are a front-end library?',
                options: ['Django', 'Ruby on rails', 'React', 'Nodejs'],
                correctOptionIndex: 2,
            },
            {
                question: 'Which one of these is not a React hook?',
                options: ['useBrowser', 'useEffect', 'useState', 'useReducer'],
                correctOptionIndex: 0,
            },
            {
                question: 'Which one of these are not a react framwork',
                options: ['Nextjs', 'Remixjs', 'Nuxtjs', 'All of these'],
                correctOptionIndex: 2,
            },
            {
                question: 'What you commonly dont use in web development?',
                options: ['CSS', 'Kotlin', 'Typescript', 'HTML'],
                correctOptionIndex: 1,
            },
        ],
    },
    webd3: {
        id: 'webd3',
        name: 'Web Development level 3',
        desc: 'Test your web development skills with our engaging quiz! Designed for both beginners and experienced developers, this quiz covers HTML, CSS, JavaScript, and popular frameworks. Dive into questions about code syntax, responsive design, best practices, and more. Challenge yourself and compare your knowledge with other developers. Ready to see how you fare? Take our web development quiz now!',
        avarageScore: 2,
        avarageTimeTaken: 275,
        level: 'Hard',
        questions: [
            {
                question: 'Which programming langauge is commonly used in Web development?',
                options: ['C++', 'JavaScript', 'Python', 'Rust'],
                correctOptionIndex: 1,
            },
            {
                question: 'Which one of these are a front-end library?',
                options: ['Django', 'Ruby on rails', 'React', 'Nodejs'],
                correctOptionIndex: 2,
            },
            {
                question: 'Which one of these is not a React hook?',
                options: ['useBrowser', 'useEffect', 'useState', 'useReducer'],
                correctOptionIndex: 0,
            },
            {
                question: 'Which one of these are not a react framwork',
                options: ['Nextjs', 'Remixjs', 'Nuxtjs', 'All of these'],
                correctOptionIndex: 2,
            },
            {
                question: 'What you commonly dont use in web development?',
                options: ['CSS', 'Kotlin', 'Typescript', 'HTML'],
                correctOptionIndex: 1,
            },
        ],
    },
}

export default quizes
