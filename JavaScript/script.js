const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  // Add more quiz questions as needed
];

let currentQuestionIndex = 0;
let countdownValue = 10;
let timerInterval;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const countdownElement = document.getElementById("countdown");

function startQuiz() {
  loadQuestion();
  timerInterval = setInterval(updateCountdown, 1000);
}

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];

  if (selectedOption === currentQuestion.correctAnswer) {
    // Handle correct answer logic (e.g., increase score)
  }

  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
    resetCountdown();
  } else {
    // Handle quiz completion logic
    clearInterval(timerInterval);
    alert("Quiz completed!");
  }
}

function updateCountdown() {
  countdownElement.textContent = countdownValue + " seconds";

  if (countdownValue > 0) {
    countdownValue--;
  } else {
    // Handle timeout logic
    checkAnswer(null);
    resetCountdown();
  }
}

function resetCountdown() {
  countdownValue = 10;
}

document.getElementById("next-btn").addEventListener("click", () => checkAnswer(null));

startQuiz();
