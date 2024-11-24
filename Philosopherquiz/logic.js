let score = 0;
function startQuiz() {
    // Hide the landing page and show the first question only
    document.getElementById('landing-page').classList.add('d-none');
    document.getElementById('quiz-container').classList.remove('d-none');
    document.getElementById('step1').classList.add('active');  // Show only the first question
}

function checkAnswer(step) {
    const selectedAnswer = document.querySelector(`input[name="question${step}"]:checked`);
    const correctAnswer = getCorrectAnswer(step);
    const explanation = getExplanation(step);
    const imageSrc = getImageSrc(step);
    const feedbackElement = document.querySelector(`#feedback${step}`);
    const h2Element = document.querySelector(`#step${step} h2`);
    const radioWrapper = document.querySelector(`#step${step} .radio-wrapper`);
    const checkAnswerBtn = document.querySelector(`#step${step} button.btn-success`);

  
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }
    // Feedback based on the answer
    //Delay rendering a little in case it's needed

    setTimeout(() => {
        
    
    if (selectedAnswer.value === correctAnswer) {
        feedbackElement.classList.add('correct-answer');
        feedbackElement.innerHTML = 'Right! ' + explanation;
        feedbackElement.style.color = 'green';
        updateScore();
        console.log(score);
    } else {
        feedbackElement.classList.add('wrong-answer');
        feedbackElement.innerHTML = 'Wrong! The correct answer is ' + correctAnswer + '. ' + explanation;
        feedbackElement.style.color = 'red';
    }

    console.log(selectedAnswer.value);  // Log selected answer for debugging


    // Add image to feedback
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.alt = 'Philosopher Image';
    imgElement.classList.add('img-fluid', 'mt-3');
    feedbackElement.appendChild(imgElement);

    // Hide the question heading, radio buttons, and check button
    console.log(h2Element);
    console.log(radioWrapper);
    console.log(checkAnswerBtn);

    h2Element.style.display = 'none';  // Hide question title
    radioWrapper.style.display = 'none';  // Hide radio buttons and labels
    checkAnswerBtn.style.display = 'none';  // Hide check answer button

    // Show the "Next" button after checking the answer
    document.getElementById('next' + step).style.display = 'inline';


    // Show the icon
    document.querySelectorAll('.icon-container').forEach(function(element) {
        element.classList.toggle('d-none');
    });

    }, 0);

}
  

function getCorrectAnswer(step) {
    //Return the correct answer based on the step
    const correctAnswers = {
        1: 'Kierkegaard',
        2: 'Heraclitus',
        3: 'Protagoras',
        4: 'Sartre',
        5: 'Aristotle',
        6: 'Epicurus',
        7: 'Heraclitus',
        8: 'Schopenhauer',
        9: 'Nietzsche',
        10: 'William James'
      };
    
      return correctAnswers[step];
}

function getExplanation(step) {
    // Return the explanation based on the step
    const explanations = {
        1: 'Kierkegaard said that life is a series of transitions. You enter the future through the leap of faith. And then you make the interpretation.',
        2: 'Heraclitus emphasized the concept of change.',
        3: 'According to Protagoras, human beings are the measure of all things.',
        4: 'Sartre believed that loneliness is a sign of bad company. If you cannot stand loneliness, you need to look in the mirror.',
        5: 'Aristotle believed that a civilized person can entertain a thought without accepting it.',
        6: 'It was Epicurus who warned against wanting what you have not.',
        7: 'Heraclitus emphasized the importance of living in harmony with nature. Everything changes.',
        8: 'Schopenhauer was a lonely, introverted guy.',
        9: 'Nietzsche believed that madness lies in groups.',
        10: 'William James was a psychologist who encouraged people to be bold and courageous.'
      };
    
      return explanations[step];
}

function getImageSrc(step) {

    // Return the image source based on the step

    const imageSources = {
        1: 'images/kierkegaard.jpg',
        2: 'images/heraclitus.jpg',
        3: 'images/protagoras.jpg',
        4: 'images/sartre.jpg',
        5: 'images/aristotle.jpg',
        6: 'images/epicurus.jpg',
        7: 'images/heraclitus.jpg',
        8: 'images/schopenhauer.jpg',
        9: 'images/nietzsche.jpg',
        10: 'images/james.jpg'
      };
    
      return imageSources[step];
}


function nextStep(step) {

    scrollTo(0, 0);
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(stepDiv => {
        stepDiv.classList.add('d-none');
    });

    // Show the next step
    const nextStep = document.getElementById('step' + step);
    nextStep.classList.remove('d-none');

    // Ensure "Next" button is hidden for subsequent steps (when the user is on the next question)
    const nextButton = nextStep.querySelector(`#next${step}`);
    nextButton.style.display = 'none';

   // Hide the icon
   document.querySelectorAll('.icon-container').forEach(function(element) {
    element.classList.toggle('d-none');
    });
   

    // If it's the final step, show the score or characterization
    if (step === 11) {
        showResults();
    }

}

function updateScore() {
    score += 1;
}

function showResults() {
    console.log(score);
    const scoreHtml = `<p id="final-score">${score}/10</p>`;   
    document.getElementById('step11').classList.remove('d-none');
    document.getElementById('score-container').innerHTML = scoreHtml;
    showCharacterization();
}

function showCharacterization() {
    const characterizationElement = document.getElementById('characterization');
    let characterization = '';

    if (score === 10) {
        characterization = "You're a true Philosophy Master!";
    } else if (score >= 8) {
        characterization = "Great job! You're a Philosophy Enthusiast!";
    } else if (score >= 5) {
        characterization = "Not bad! You're on your way to becoming a Philosopher.";
    } else {
        characterization = "Keep studying! The world of philosophy is vast and fascinating.";
    }

    characterizationElement.textContent = characterization;
}

function refreshPage() {
    window.location.reload();
}   
