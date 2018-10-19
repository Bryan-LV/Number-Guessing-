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
    });

    // min max numbers event
    document.addEventListener('keyup',function(e){
        if(e.target.classList.contains('max-num')){
            maxNumInput();
        } else if(e.target.classList.contains('min-num')){
            minNumInput();
        }
    });
}


// Allow user to change min and max numbers
function checkGuess(){
    let minNumber = minNumInput();
    let maxNumber = maxNumInput();
    // random number generated from min-max values
    function ranNum(min, max){
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(number);
        return number;
    }
    // check if number = random generated number
    if(parseFloat(guessInput.value) === ranNum(minNumber, maxNumber)){
        message.textContent = 'You guessed the right number!'
        message.style.color = 'green';
    } else if(chances !== 0) {
        chances--
        message.textContent = `Sorry, you guessed the wrong number. You have ${chances} left`;
        message.style.color = 'red';
    } else{
        guessInput.setAttribute('disabled','disabled')
        guessInput.style.borderColor = 'red';
        message.textContent = 'Sorry you have used up all your chances :(';
    }
}

function minNumInput(){
    minNumber.style.border = 'none';
    let minNumberVal = parseFloat(minNumber.value);
    return minNumberVal;
} 

function maxNumInput(){
    maxNumber.style.border = 'none';
    let maxNumberVal = parseFloat(maxNumber.value);
    return maxNumberVal;
}