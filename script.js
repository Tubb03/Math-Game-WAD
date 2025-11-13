// Global variables for game state and DOM elements
let currentAnswer = 0;
let score = 0;

const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const answerInput = document.getElementById('answer-input');
const checkBtn = document.getElementById('check-btn');
const feedbackElement = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score-display');

/**
 * 1. Generates two random numbers and displays the multiplication question.
 */
function generateQuestion() {
    // Generate random integers between 1 and 10
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    // Calculate and store the correct answer
    currentAnswer = num1 * num2;

    // Display the new numbers
    num1Element.textContent = num1;
    num2Element.textContent = num2;

    // Clear previous input and focus
    answerInput.value = '';
    answerInput.focus();
}

/**
 * 2. Checks the user's answer against the correct answer.
 * 3. Shows feedback (Correct/Wrong).
 * 4. Updates the score.
 */
function checkAnswer() {
    // Get the user's answer (convert to number)
    const userAnswer = parseInt(answerInput.value);

    // Check if input is valid
    if (isNaN(userAnswer)) {
        feedbackElement.textContent = "Please enter a number!";
        feedbackElement.className = 'message wrong';
        return;
    }

    // Check if the answer is correct
    if (userAnswer === currentAnswer) {
        // Correct answer logic
        score++;
        feedbackElement.textContent = "✅ Correct! Great job.";
        feedbackElement.className = 'message correct';
    } else {
        // Wrong answer logic
        feedbackElement.textContent = `❌ Wrong! The correct answer was ${currentAnswer}.`;
        feedbackElement.className = 'message wrong';
    }

    // Update the score display
    scoreDisplay.textContent = score;

    // Generate the next question after a short delay
    setTimeout(generateQuestion, 1500); // 1.5 seconds delay for feedback
}

// Event listener for the Check Answer button
checkBtn.addEventListener('click', checkAnswer);

// Event listener for pressing Enter key in the input field
answerInput.addEventListener('keydown', (event) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents default form submission behavior
        checkAnswer();
    }
});

// Start the game by generating the first question
generateQuestion();
