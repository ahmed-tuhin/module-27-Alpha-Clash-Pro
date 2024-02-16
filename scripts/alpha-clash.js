// ---------------------- system-1 ------------------
// function play (){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden')


//     // step-2: show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     // console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event){
    const playerPressed  = event.key;
    console.log('player pressed',playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    // console.log(currentAlphabetElement.innerText);
    const currentAlphabet = currentAlphabetElement.innerText;
    // const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed,expectedAlphabet);


    // checked matched
    if( playerPressed === expectedAlphabet){
        console.log('you get a point');
        console.log('you have pressed correctly',expectedAlphabet)

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1 ; 
        setTextElementValueById('current-score',updatedScore)





    //------------------------------------------------------------------------------------
    //      update score
    //      1. get the current score
    //     const currentScoreElement = document.getElementById('current-score');
    //     const currentScoreText = currentScoreElement.innerText;
    //     const currentScore = parseInt(currentScoreText);
    //     console.log(currentScore);

    //     // 2. increase the score by 1 
    //     const newScore = currentScore + 1;
    //     // 3. show the  update score 
    //    currentScoreElement.innerText = newScore;
    //------------------------------------------------------------------------------------
        // start a new round
        continueGame();
        removeBackgroundColorById(expectedAlphabet)
    }
    else{
        console.log('you missed .you lost a life');


        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife)

        if( updatedLife === 0){
           gameOver();
        }

        //-----------------------------------------------------------------------------------
        // // step-1:  get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText)
        // // step-1: reduce the life count 
        // const newLife = currentLife - 1;
        // // step-1: display the update life count
        // currentLifeElement.innerText = newLife;
        //----------------------------------------------------------------------------------
    }
}



document.addEventListener('keyup',handleKeyboardButtonPress)

// captured keyboard key press
function continueGame(){
    // step-1: generate a random alphabet
     const alphabet = getARandomAlphabet();
    //  console.log('your random alphabet',alphabet);

     // set randomly generated  to the screen (show it)
     const currentAlphabetElement = document.getElementById('current-alphabet');
     currentAlphabetElement.innerText = alphabet;

     setBackgroundColorById(alphabet)
}

//-------------------- system 2 -------------------
function play(){
    // hide everything show only playground
    hideElementById('home-screen')
    showElementById('play-ground')
    hideElementById('final-score')

    //reset score and life
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)
    continueGame()
}


function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score')
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet)
}

