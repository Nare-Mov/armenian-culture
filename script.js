let index = 0;

function moveSlide(step) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    index += step;

    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Optional: Auto-slide functionality
setInterval(() => {
    moveSlide(1);
}, 5000);













function submitQuiz() {
    const quizForm = document.getElementById('quizForm');
    let score = 0;

    // Correct answers
    const answers = {
        q1: 'C',  // Correct answer for question 1
        q2: 'B',  // Correct answer for question 2
        q3: 'B'   // Correct answer for question 3
    };

    // Check the answers
    for (let i = 1; i <= 3; i++) {
        const question = `q${i}`;
        const selectedAnswer = quizForm.querySelector(`input[name="${question}"]:checked`);
        
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }

    // Display result
    const result = document.getElementById('result');
    result.innerHTML = `You got ${score} out of 3 correct.`;
}
