// Const.s
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('questions');
const quitScreen = document.getElementById('quit-screen');
const skipScreen = document.getElementById('skip-screen');
const endScreen = document.getElementById('end-screen');
const startButton = document.getElementById('start-button');
const questionText = document.getElementById('question-text');
const answerContainer = document.getElementById('answers');
const questionNumberSpan = document.getElementById('question-num');
const totalQuestionsSpan = document.getElementById('total-questions');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.getElementById('result-message');
const quitButton = document.getElementById('quit-button');
const quitConfirmButton = document.getElementById('confirm-quit-button');
const quitCancelButton = document.getElementById('cancel-quit-button');
const skipButton = document.getElementById('skip-button');
const skipConfirmButton = document.getElementById('confirm-skip-button');
const skipCancelButton = document.getElementById('cancel-skip-button');
const restartButton = document.getElementById('restart-button');
const homeButton = document.getElementById('home-button');
const progress = document.getElementById('progress');

// Question set
const questions = [
    {
        question: "What is the capital of the US?",
        answers: [
            { text: "New York", correct: false },
            { text: "Washington, D.C.", correct: true },
            { text: "Los Angeles", correct: false },
            { text: "Chicago", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Earth", correct: false },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "NaCl", correct: false },
            { text: "CO2", correct: false },
            { text: "CaCO3", correct: false },
            { text: "H2O", correct: true }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Great White Shark", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: [
            { text: "Avocado", correct: true },
            { text: "Tomato", correct: false },
            { text: "Onion", correct: false },
            { text: "Lime", correct: false }
        ]
    },
    {
        question: "What is the largest continent on Earth?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
            { text: "Europe", correct: false },
            { text: "North America", correct: false }
        ]
    },
    {
        question: "Approximately how many people live in the world as of 2025?",
        answers: [
            { text: "7.5 billion", correct: false },
            { text: "9 billion", correct: false },
            { text: "7 billion", correct: false },
            { text: "8 billion", correct: true }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "What is the world's largest desert?",
        answers: [
            { text: "Sahara Desert", correct: false },
            { text: "Arabian Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Antarctic Desert", correct: true }
        ]
    },
    {
        question: "What is the most spoken language in the world?",
        answers: [
            { text: "English", correct: false },
            { text: "Mandarin Chinese", correct: true },
            { text: "Spanish", correct: false },
            { text: "Hindi", correct: false }
        ]
    },
    {
        question: "What is the most widely watched sport in the world?",
        answers: [
            { text: "Basketball", correct: false },
            { text: "Soccer/Football", correct: true },
            { text: "American Football", correct: false },
            { text: "Tennis", correct: false }
        ]
    },
    {
        question: "In what direction does the sun rise?",
        answers: [
            { text: "North", correct: false },
            { text: "South", correct: false },
            { text: "East", correct: true },
            { text: "West", correct: false }
        ]
    },
    {
        question: "Which country is the largest by land area?",
        answers: [
            { text: "United States", correct: false },
            { text: "China", correct: false },
            { text: "Canada", correct: false },
            { text: "Russia", correct: true }
        ]
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Nauru", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false }
        ]
    },
    {
        question: "What is the tallest building in the world?",
        answers: [
            { text: "Burj Khalifa", correct: true },
            { text: "Eiffel Tower", correct: false },
            { text: "Empire States Building", correct: false },
            { text: "Taipei 101", correct: false }
        ]
    }
];

// Quiz var.s & const.s
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = questions.length;
maxScoreSpan.textContent = questions.length;

// Listeners
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);
homeButton.addEventListener('click', home);
quitButton.addEventListener('click', quit);
quitConfirmButton.addEventListener('click', quitConfirm);
quitCancelButton.addEventListener('click', quitCancel);
skipButton.addEventListener('click', skip);
skipConfirmButton.addEventListener('click', skipConfirm);
skipCancelButton.addEventListener('click', skipCancel);

// Func.s
function startQuiz() {
    // init
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');

    console.log("Quiz started");
    
    showQuestion();
}

function showQuestion() {
    answersDisabled = false;

    const currentQuestion = questions[currentQuestionIndex];
    questionNumberSpan.textContent = currentQuestionIndex + 1;
    
    const progressPercentage = (currentQuestionIndex / questions.length) * 100;
    progress.style.width = progressPercentage + '%';
    
    questionText.textContent = currentQuestion.question;
    
    answerContainer.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add("answer-button");
        
        button.dataset.correct = answer.correct;
        
        button.addEventListener('click', selectAnswer);
        answerContainer.appendChild(button); // add button to the UI
    });
}

function selectAnswer(event) {
    if (answersDisabled) return; // don't allow multiple selections, base case

    answersDisabled = true; // let the user make the one and only selection

    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct === 'true';

    Array.from(answerContainer.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
            console.log("Correct answer selected");
        } else if (button === selectedButton) { // no need to check unselected buttons
            button.classList.add('incorrect');
            console.log("Incorrect answer selected");
        }
    });

    if (correct) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) showQuestion();
        else showResults();
    }, 1000); // wait 1 second before showing the next question
}

function quit() {
    // Quit button functionality:
    // On click: Prompt the user to confirm quitting the quiz
    // If confirmed, redirect to the home screen
    // If cancelled, return to the quiz screen
    console.log("Quit button clicked");
    quizScreen.classList.remove('active');
    quitScreen.classList.add('active');
}

function quitConfirm() {
    console.log("Quit confirmed. Redirecting to home screen...");
    quitScreen.classList.remove('active');
    startScreen.classList.add('active');

    // (OPTOINAL): Depends on when the score is displayed, but for now, this works
    // since the score is only displayed after starting the quiz.
    // -------------------------------------------------
    // currentQuestionIndex = 0; // reset the quiz state
    // score = 0; // reset the score
    // scoreSpan.textContent = score; // update the score display
    // progress.style.width = '0%'; // reset the progress bar
    // answersDisabled = false; // re-enable answers for the next quiz
}

function quitCancel() {
    console.log("Quit cancelled");
    quitScreen.classList.remove('active');
    quizScreen.classList.add('active');
    // answersDisabled = false; // re-enable answers if the user cancels quitting
}

function skip() {
    // Skip button functionality:
    // On click: Prompt the user to confirm skipping to the end of the quiz
    // If confirmed, redirect to the result screen with the progress made so far
    // If cancelled, return to the quiz screen
    console.log("Skip button clicked");
    quizScreen.classList.remove('active');
    skipScreen.classList.add('active');
}

function skipConfirm() {
    console.log("Skip confirmed. Redirecting to results screen...");
    skipScreen.classList.remove('active');
    // endScreen.classList.add('active');
    showResults(); // show results directly since skipping means no more questions
}

function skipCancel() {
    console.log("Skip cancelled");
    skipScreen.classList.remove('active');
    quizScreen.classList.add('active');
    // answersDisabled = false; // re-enable answers if the user cancels skipping
}

function showResults() {
    quizScreen.classList.remove('active');
    endScreen.classList.add('active');

    const questionsAnswered = currentQuestionIndex;
    maxScoreSpan.textContent = questionsAnswered;
    
    finalScoreSpan.textContent = score;
    if (questionsAnswered === 0) {
        resultMessage.textContent = "You didn't answer any questions!";
        return; // no need to show further messages
    }
    if (questionsAnswered === questions.length) { // all questions answered
        if (score === questionsAnswered) resultMessage.textContent = "You aced it! Well done!";
        else if (score >= questionsAnswered * 0.66) resultMessage.textContent = "Great job! Almost there!";
        else if (score >= questionsAnswered * 0.33) resultMessage.textContent = "Good effort! Keep practicing!";
        else resultMessage.textContent = "Don't worry, try again! You can do it!";    
    } else {
        resultMessage.textContent = "You skipped some questions. Your score only reflects the questions answered.";
    }
    
}

function home() {
    endScreen.classList.remove('active');
    startScreen.classList.add('active');
}

function restartQuiz() {
    endScreen.classList.remove('active');
    startScreen.classList.add('active');
    console.log("Quiz restarted");
    startQuiz();
}