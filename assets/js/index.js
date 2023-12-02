const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "New York", correct: false },
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Dublin", correct: false }
        ]
    },
    {
        question: "Who is CEO of Tesla?",
        answers: [
            { text: "Jeff Bezos", correct: false },
            { text: "Elon Musk", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Tony Stark", correct: false }
        ]
    },
    {
        question: "The iPhone was created by which company?",
        answers: [
            { text: "Apple", correct: true },
            { text: "Intel", correct: false },
            { text: "Amazon", correct: false },
            { text: "Microsoft", correct: false }
        ]
    },
    {
        question: "How many Harry Potter books are there?",
        answers: [
            { text: "1", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true }
        ]
    },
    {
        question: "How many sides does a heptagon have?",
        answers: [
            { text: "7", correct: true },
            { text: "8", correct: false },
            { text: "6", correct: false },
            { text: "5", correct: false }
        ]
    }
]

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");

const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    console.log("Started");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
};

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};