// UI Variables
let minNumber = document.querySelector('.min-num');
let maxNumber = document.querySelector('.max-num');
let guessInput = document.querySelector('#guess-input');
let submitBtn = document.querySelector('#guess-value');
let message = document.querySelector('.message');
let chances = 3;
// set up event listeners
eventListener();

function eventListener(){
    // Submit event
    document.addEventListener('click',function(e){
        if(e.target.id === 'guess-value'){
            checkGuess();
        }
    }

    // 
)};

// Allow user to change min and max numbers
function checkGuess(){
    let maxNumber = 10;
    let randomNum = Math.random() * Math.floor(maxNumber);
    if(parseFloat(guessInput.value) === 10){
        message.textContent = 'You guessed the right number!'
        message.style.color = 'green';
    } else if(chances !== 0) {
        chances--
        message.textContent = `Sorry, you guessed the wrong number. You have ${chances} left`;
        message.style.color = 'red';
    } else{
        
    }
}
// check if number = random generated number
