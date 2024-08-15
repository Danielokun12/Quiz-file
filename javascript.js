let currentQuestionIndex = 0;
let score = 0;

const questions = [
    { correctAnswer: "Paris" },
    { correctAnswer: "Mars" },
    { correctAnswer: "CONDA" },
    { correctAnswer: "Factors" },
    { correctAnswer: "Country" },
    { correctAnswer: "LG" },
    { correctAnswer: "Buying and selling site" },
    { correctAnswer: "Styling the webpage" }
];

const questionDivs = document.querySelectorAll('.question');
const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
const skipButton = document.getElementById('skip-button');
const scoreDisplay = document.getElementById('score-display');

function showQuestion(index) {
    questionDivs.forEach((div, i) => {
        div.style.display = i === index ? 'block' : 'none';
    });


    previousButton.style.display = index === 0 ? 'none' : 'inline-block';
    nextButton.style.display = index === questions.length - 1 ? 'none' : 'inline-block';
    skipButton.style.display = index === questions.length - 1 ? 'none' : 'inline-block';
}

function handleNextQuestion() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex + 1}"]:checked`);

    if (selectedOption || currentQuestionIndex === questions.length - 1) {
        if (selectedOption && selectedOption.value === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            document.querySelector('.quiz-container').innerHTML = `<h2>Your final score is ${score} out of ${questions.length}</h2>`;
            nextButton.style.display = 'none';
            previousButton.style.display = 'none';
            skipButton.style.display = 'none';
        }

        scoreDisplay.textContent = `Score: ${score}`;
    } else {
        alert('Please select an answer or skip the question.');
    }
}

function handlePreviousQuestion() {
    if (currentQuestionIndex > 0) {
        const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex + 1}"]:checked`);
        if (selectedOption) {
         
        }

        currentQuestionIndex--;

        showQuestion(currentQuestionIndex);
    }

    // Adjust button visibility
    previousButton.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    nextButton.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
    skipButton.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
}

function handleSkipQuestion() {
    // Move to the next question without validating the current one
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        document.querySelector('.quiz-container').innerHTML = `<h2>Your final score is ${score} out of ${questions.length}</h2>`;
        nextButton.style.display = 'none';
        previousButton.style.display = 'none';
        skipButton.style.display = 'none';
    }

  
    previousButton.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    nextButton.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
    skipButton.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
}

// Event Listeners
nextButton.addEventListener('click', handleNextQuestion);
previousButton.addEventListener('click', handlePreviousQuestion);
skipButton.addEventListener('click', handleSkipQuestion);

// Load the first question when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex);
});


