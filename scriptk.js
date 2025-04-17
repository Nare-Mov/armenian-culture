const questions = [
    {
        question: "Ինչի պաշտամունքին է նվիրված քոչարի պարը:",
        options: ["Խոյի", "Ցլի", "Առյուծի", "Ձիու"],
        correct: 0
    },
    {
        question: "Երբ է քոչարի պարը կորցրել իր ծիսական նշանակությունը:",
        options: ["19-րդ դարում", "16-րդ դարում", "10-րդ դարում", "15-րդ դարում"],
        correct: 0
    },
    {
        question: "Երբ է քոչարին ընդգրկվել ՅՈՒՆԵՍԿՕ-ի ցանկում:",
        options: ["2017 թ.", "2019 թ.", "2016 թ.", "2010 թ."],
        correct: 0
    },
    {
        question: "Մինչ 19-րդ դարը ովքեր կարող էին պարել քոչարի պարը:",
        options: ["տղամարդիկ", "կանայք", "երեխաները", "տարեցները"],
        correct: 0
    },
    {
        question: "Որտեղից է ծնունդ առել քոչարի պարը:",
        options: ["Արևելյան Հայաստան", "Կիլիկիա", "Ծոփք", "Արևմտյան Հայաստան"],
        correct: 3
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
    document.getElementById("quiz-question").textContent = `Դուք ճիշտ պատասխանեցիք ${score}/5 հարցերին!`;
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

