const questions = [
    {
        question: "Ինչ է հանդիսանում լավաշը հայերի կյանքում:",
        options: ["Մշակութային տարր", "Սննունդ", "Նշանակություն չունի", "Կենցաղ"],
        correct: 0
    },
    {
        question: "Երբ է կատարվում լավաշ թխելու արարողությունը:",
        options: ["Վաղ առավոտյան", "Երեկոյան", "Գիշերը", "Կեսօրին"],
        correct: 0
    },
    {
        question: "Որքան է տևել լավաշ թխելու արարողությունը:",
        options: ["1-2 օր", "1 օր", "1 շաբաթ", "5 ժամ"],
        correct: 0
    },
    {
        question: "Երբ է լավաշը ընդգրկվել ՅՈՒՆԵՍԿՕ-ի ցանկում:",
        options: ["2014 թ.", "2015 թ.", "2016 թ.", "2019 թ."],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("quiz-question").textContent = questions[currentQuestion].question;
        const buttons = document.querySelectorAll("#quiz-options button");
        buttons.forEach((button, index) => {
            button.textContent = questions[currentQuestion].options[index];
            button.onclick = () => checkAnswer(index);
        });
    } else {
        showResults();
    }
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function showResults() {
    document.getElementById("quiz-question").textContent = `Դուք ճիշտ պատասխանեցիք ${score}/4 հարցերին!`;
    document.getElementById("quiz-options").innerHTML = `<button onclick="restartQuiz()">Կրկին փորձել</button>`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-options").innerHTML = `
        <button></button>
        <button></button>
        <button></button>
        <button></button>
    `;
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", loadQuestion);

