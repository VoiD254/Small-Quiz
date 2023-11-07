'use strict';

const quizData = [
    {
        question: 'How old is the Ramayana ?',
        a: '7000 years',
        b: '5000 years',
        c: '2000 years',
        d: '3000 years',
        correct: 'a'
    }, {
        question: 'Which is not a programming language ?',
        a: 'C#',
        b: 'Rust',
        c: 'Java',
        d: 'HTML',
        correct: 'd'
    }, {
        question: 'Who is the Prime Minister of India ?',
        a: 'Rahul Gandhi',
        b: 'Sidhu Moosewala',
        c: 'Narendra Modi',
        d: 'Sushant Singh Rajput',
        correct: 'c'
    }, {
        question: 'What does HTML stands for ?',
        a: 'Hugetext Makeup Language',
        b: 'Hypertext Markup Language',
        c: 'High Transcriptive Markup Language',
        d: 'None of the Above',
        correct: 'b'
    }, {
        question: 'What year was Javascript launched ?',
        a: '1999',
        b: '1995',
        c: '2008',
        d: '1997',
        correct: 'b'
    }
];

// console.log(typeof(quizData));


const answerEls = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');
const quiz = document.getElementById('quiz');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectOptions();
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getRight() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectOptions() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getRight();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2> <button onclick = "location.reload()"> Retry </button>`;
        }
    }

});
