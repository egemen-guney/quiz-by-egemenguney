// Const.s
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('questions');
const quitScreen = document.getElementById('quit-screen');
const skipScreen = document.getElementById('skip-screen');
const endScreen = document.getElementById('end-screen');
const difficultyButton = document.getElementById('difficulty-select');
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
// NUMBERS:
//  EASY: 10
//  MEDIUM: 10
//  HARD: 10
// QUESTION TEMPLATE:
/*
{
    question: "",
    answers: [
        { text: "", correct: true },
        { text: "", correct: true },
        { text: "", correct: true },
        { text: "", correct: true }
    ],
    idx: 1,
    difficulty: ""
}
*/
const questions = [
    {
        question: "What is the capital of the US?",
        answers: [
            { text: "New York", correct: false },
            { text: "Washington, D.C.", correct: true },
            { text: "Los Angeles", correct: false },
            { text: "Chicago", correct: false }
        ],
        idx: 0,
        difficulty: "medium"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Earth", correct: false },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: false }
        ],
        idx: 1,
        difficulty: "hard"
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "NaCl", correct: false },
            { text: "CO2", correct: false },
            { text: "CaCO3", correct: false },
            { text: "H2O", correct: true }
        ],
        idx: 2,
        difficulty: "easy"
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Great White Shark", correct: false }
        ],
        idx: 3,
        difficulty: "medium"
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: [
            { text: "Avocado", correct: true },
            { text: "Tomato", correct: false },
            { text: "Onion", correct: false },
            { text: "Lime", correct: false }
        ],
        idx: 4,
        difficulty: "easy"
    },
    {
        question: "What is the largest continent on Earth?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
            { text: "Europe", correct: false },
            { text: "North America", correct: false }
        ],
        idx: 5,
        difficulty: "medium"
    },
    {
        question: "Approximately how many people live in the world as of 2025?",
        answers: [
            { text: "7.5 billion", correct: false },
            { text: "9 billion", correct: false },
            { text: "7 billion", correct: false },
            { text: "8 billion", correct: true }
        ],
        idx: 6,
        difficulty: "easy"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ],
        idx: 7,
        difficulty: "hard"
    },
    {
        question: "What is the world's largest desert?",
        answers: [
            { text: "Sahara Desert", correct: false },
            { text: "Arabian Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Antarctic Desert", correct: true }
        ],
        idx: 8,
        difficulty: "hard"
    },
    {
        question: "What is the most spoken language in the world?",
        answers: [
            { text: "English", correct: false },
            { text: "Mandarin Chinese", correct: true },
            { text: "Spanish", correct: false },
            { text: "Hindi", correct: false }
        ],
        idx: 9,
        difficulty: "medium"
    },
    {
        question: "What is the most widely watched sport in the world?",
        answers: [
            { text: "Basketball", correct: false },
            { text: "Soccer/Football", correct: true },
            { text: "American Football", correct: false },
            { text: "Tennis", correct: false }
        ],
        idx: 10,
        difficulty: "easy"
    },
    {
        question: "In what direction does the sun rise?",
        answers: [
            { text: "North", correct: false },
            { text: "South", correct: false },
            { text: "East", correct: true },
            { text: "West", correct: false }
        ],
        idx: 11,
        difficulty: "easy"
    },
    {
        question: "Which country is the largest by land area?",
        answers: [
            { text: "United States", correct: false },
            { text: "China", correct: false },
            { text: "Canada", correct: false },
            { text: "Russia", correct: true }
        ],
        idx: 12,
        difficulty: "medium"
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Nauru", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false }
        ],
        idx: 13,
        difficulty: "medium"
    },
    {
        question: "What is the tallest building in the world?",
        answers: [
            { text: "Burj Khalifa", correct: true },
            { text: "Eiffel Tower", correct: false },
            { text: "Empire States Building", correct: false },
            { text: "Taipei 101", correct: false }
        ],
        idx: 14,
        difficulty: "medium"
    },
    {
        question: "How many cards are there in a standard deck of playing cards?",
        answers: [
            { text: "54", correct: false },
            { text: "50", correct: false },
            { text: "52", correct: true },
            { text: "48", correct: false }
        ],
        idx: 15,
        difficulty: "medium"
    },
    {
        question: "What is the only planet in our solar system to rotate clockwise on its axis?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Saturn", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: true }
        ],
        idx: 16,
        difficulty: "hard"
    },
    {
        question: "What is the human body's largest organ?",
        answers: [
            { text: "The intestines", correct: false },
            { text: "The stomach", correct: false },
            { text: "The skin", correct: true },
            { text: "The brain", correct: false }
        ],
        idx: 17,
        difficulty: "medium"
    },
    {
        question: "What does \"URL\" stand for?",
        answers: [
            { text: "User Reading List", correct: false },
            { text: "User Ready Link", correct: false },
            { text: "Uniform Resource Locator", correct: true },
            { text: "Uniform Relay Location", correct: false }
        ],
        idx: 18,
        difficulty: "hard"
    },
    {
        question: "What does \"HTTP\" stand for?",
        answers: [
            { text: "Hypertext Transfer Protocol", correct: true },
            { text: "Hypertext Transorm Protocol", correct: false },
            { text: "Hash Text Transfer Part", correct: false },
            { text: "Human Technology Translation Protocol", correct: false }
        ],
        idx: 19,
        difficulty: "hard"
    },
    {
        question: "What is the world's most populated city?",
        answers: [
            { text: "Beijing, China", correct: false },
            { text: "Tokyo, Japan", correct: true },
            { text: "Moscow, Russia", correct: false },
            { text: "Paris, France", correct: false }
        ],
        idx: 20,
        difficulty: "hard"
    },
    {
        question: "Which blood type is a universal donor?",
        answers: [
            { text: "O positive", correct: false },
            { text: "O negative", correct: true },
            { text: "AB negative", correct: false },
            { text: "A positive", correct: false }
        ],
        idx: 21,
        difficulty: "hard"
    },
    {
        question: "How many colors are there in a rainbow?",
        answers: [
            { text: "7", correct: true },
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "5", correct: false }
        ],
        idx: 22,
        difficulty: "medium"
    },
    {
        question: "How many planets make up our solar system?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ],
        idx: 23,
        difficulty: "hard"
    },
    {
        question: "Which gas makes up most of the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Hydrogen", correct: false }
        ],
        idx: 24,
        difficulty: "hard"
    },
    {
        question: "How many legs does a spider have?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ],
        idx: 25,
        difficulty: "easy"
    },
    {
        question: "Which shape has four equal sides?",
        answers: [
            { text: "Triangle", correct: false },
            { text: "Rectangle", correct: false },
            { text: "Square", correct: true },
            { text: "Circle", correct: false }
        ],
        idx: 26,
        difficulty: "easy"
    },
    {
        question: "How many sides does a hexagon have?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ],
        idx: 27,
        difficulty: "easy"
    },
    {
        question: "Which gas do humans need to breathe to survive?",
        answers: [
            { text: "Carbon Dioxide", correct: false },
            { text: "Hydrogen", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Nitrogen", correct: false }
        ],
        idx: 28,
        difficulty: "easy"
    },
    {
        question: "What is the freezing point of water in degrees Celsius?",
        answers: [
            { text: "100°C", correct: false },
            { text: "0°C", correct: true },
            { text: "-10°C", correct: false },
            { text: "32°C", correct: false }
        ],
        idx: 29,
        difficulty: "easy"
    }
];

// Quiz var.s & const.s
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let quizDifficulty = "";

totalQuestionsSpan.textContent = questions.length;
maxScoreSpan.textContent = questions.length;

// Listeners
difficultyButton.addEventListener('change', selectDifficulty);
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
function selectDifficulty() {
    quizDifficulty = difficultyButton.value;

    if(quizDifficulty) {
        startButton.disabled = false;
    } else {
        startButton.disabled = true;
    }
}

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
    difficultyButton.value = "";
    quizDifficulty = "";
    startButton.disabled = true;
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
    difficultyButton.value = "";
    quizDifficulty = "";
    startButton.disabled = true;  
    startScreen.classList.add('active');
}

function restartQuiz() {
    endScreen.classList.remove('active');
    startScreen.classList.add('active');
    console.log("Quiz restarted");
    startQuiz();
}