const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('questions');
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
const restartButton = document.getElementById('restart-button');
const progress = document.getElementById('progress');

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

