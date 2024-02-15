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
        continueGame();
        removeBackgroundColorById(expectedAlphabet)
    }
    else{
        console.log('you missed .you lost a life');
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
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}