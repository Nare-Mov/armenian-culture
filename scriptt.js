const questions = [
    {
        question: "Տղամարդկանցտարազի որ տարազաձևն է տարածված արևելյան գավաներում:",
        options: ["Կովկասյան", "Երևանյան", "Իջևանյան", "Անդրկովկասյան"],
        correct: 0
    },
    {
        question: "Ինչ էին խորհրդանշում տարազի երկրաչափական նախշեր:",
        options: ["Հողը, ջուրը, օդն ու արևը ", "Երկինք ու երկիրը", "Հարստությունը", "Երջանկությունը"],
        correct: 0
    },
    {
        question: "Ինչից էին կարում կանանց տաք հագուստը:",
        options: ["Մտաքսից", "Թավշից", "Ատլասից", "Մորթուց"],
        correct: 0
    },
    {
        question: "Որ տարածարջանի տարազում էր գերակշռում բուսական նախշերը:",
        options: ["Բարձր Հայքի", "Աղձնիքի", "Տուրուբերանի", "Բոլոր ատասխանները սխալ են"],
        correct: 0
    },
    {
        question: "Ինչ գույներ են գերակշռում Սյունիք-Արցախյան տարազախմբում:",
        options: ["կապույտ-սպիտակ", "կանաչ-դեղին", "կապույտ-կարմիր", "կանաչ-կարմիր"],
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

