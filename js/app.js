let littleLetters;
let numberErrors = 0;
let numberHits = 0; 

const letters = [
    'GATO',
    'ARGENTINA',
    'ZAPATO',
    'TAZA',
    'DINOSAURIO',
    'MOCHILA',
    'CUADRADO',
    'ÑOQUIS',
];

const btn = id('play');
const image = id('image');
const btn_letters = document.querySelectorAll('#letters button');


function id(str) {
    return document.getElementById(str);
}

function random(numberMin, numberMax){
    const values = numberMax - numberMin;
    const wordsRandom = Math.floor(Math.random( ) * values) + numberMin;
    return wordsRandom;
}


btn.addEventListener('click', start);

function start(event) {
    image.src = 'img/ahorcado.png';
    btn.disabled = true;
    numberErrors = 0;
    numberHits = 0;

    const parrafo = id('guess');
    parrafo.innerHTML = '';

    const words = letters.length;
    const minimumValue = 0;
    const wordsRandom = random(minimumValue, words);
    littleLetters = letters[wordsRandom];
    const numberWords = littleLetters.length;

    for(let i=0; i<btn_letters.length; i++){
        btn_letters[i].disabled = false;
    }
    for(let i=0; i<numberWords; i++){
        const span = document.createElement('span');
        parrafo.appendChild(span);
    }
}



for(let i=0; i<btn_letters.length; i++){
    btn_letters[i].addEventListener('click', clickLetters);
}
function clickLetters(event){
    const spans = document.querySelectorAll('#guess span')
    const button = event.target;
    button.disabled = true;

    const letter = button.innerHTML.toUpperCase( );
    const word = littleLetters.toUpperCase( );

    let right = false;
    for(let i=0; i<word.length; i++){
        if(letter == word[i]){
            spans[i].innerHTML = letter;
            numberHits++;
            right = true;
        }
    }

    if(right == false){
        numberErrors++;
        const source = `img/ahorcado${numberErrors}.png`;
        image.src = source;
    }

    if(numberErrors == 7){
        id('result').innerHTML ="Perdiste, la palabra era " + littleLetters;
        gameOver( );
    }else if(numberHits == littleLetters.length){
        id('result').innerHTML = "Ganaste, sos crack!!";
        gameOver( );
    }
}

function gameOver( ){
    for(let i=0; i<btn_letters.length; i++){
        btn_letters[i].disabled = true;
    }
    btn.disabled = false;
}

gameOver( )