const quizInfo = [
    {
        question: 'What is the hardest rock?',
        a: 'Pearl',
        b: 'Diamond',
        c: 'Gravel',
        d: 'The School of Rock',
        correct: 'b'
    },
    {
        question: 'How many lives does a cat have?',
        a: '1',
        b: '5',
        c: 'unlimited',
        d: '9',
        correct: 'a'
    },
    {
        question: 'How long does it take to boil an egg?',
        a: '5 minutes',
        b: '10 minutes',
        c: '30 seconds',
        d: ' 7 minutes',
        correct: 'd'
    },
    {
        question: 'What is the worlds biggest island?',
        a: 'Puerto Rico',
        b: 'Greenland',
        c: 'Maui',
        d: 'Green Island',
        correct: 'b'
    },
    {
        question: 'What is the largest organ on the human body?',
        a: 'Large intestine',
        b: 'Brain',
        c: 'Skin',
        d: 'Lungs',
        correct: 'c'
    }
]
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitButton = document.getElementById("submit")
const quiz = document.getElementById("quiz")

let currentQuestion = 0
let score = 0
function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizInfo[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
loadQuiz();

submitButton.addEventListener("click", () => {
    
    const answer = getSelectedAnswer();
    
    // console.log(answer)
    if(answer) {
        if(answer === quizInfo[currentQuestion].correct) {
            score+=20;
        }
        currentQuestion++
        if(currentQuestion < quizInfo.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You finished the quiz! Your score is: ${score}</h2><button onclick="location.reload()">Reload</button>`
        }
    }
})

function getSelectedAnswer() {
    let answer = undefined;

    answerElements.forEach(answerElement => {
        if(answerElement.checked) {
            answer = answerElement.id
        }
    })
    return answer
}

function deselectAnswer() {
    answerElements.forEach(answerElement => {
        answerElement.checked = false
    })
}