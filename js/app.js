let littleLetters;
let numberErrors = 0;
let numberHits = 0; 

const btn = id('play');
const image = id('image');
const btn_letters = document.querySelectorAll('#letters button');
const buttonUser = document.querySelector("#button-user");


async function userDate(){
    const {
    value: formData
} =  await Swal.fire({
        title: 'Colocar nombre de juego',
        html: '<div class="form-inline col-sm-12 mt-3">' +
        '<label class="control-label col-sm-4" for="UserName">Nombre</label>' +
        '<input required="" class="form-control col-sm-7" id="UserName" name="usuario" type="text" autofocus style="color: #2e7d32;">' +
        '</div>',
        backdrop: false,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Validar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#40B340',
        cancelButtonColor: '#FF0000',
        showCloseButton: true,
        focusConfirm: true,
        focusCancel: false,
        preConfirm: () => {
        return [
            document.getElementById('UserName').value
        ]
        },
        onOpen: (modal) => {
            confirmOnEnter = (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                modal.querySelector(".swal2-confirm").click();
            }
            };
            modal.querySelector("#UserName").addEventListener("keyup", confirmOnEnter);
        }
        });
        if (formData && formData[0] != '' && formData[1] != '') {
        Swal.fire({
            title: `Hola ${formData[0]}`,
            icon: 'success',
            backdrop: false,
        });
        let date = localStorage.setItem("usuario", JSON.stringify(`${formData[0]}`));
        JSON.parse(localStorage.getItem(date));
        } else {
        Swal.fire({
            title: 'Dato incorrecto',
            icon: 'warning',
            backdrop: false
        });
    }}

btn.addEventListener ("click", () => {
    let timerInterval
Swal.fire({
    title: 'Generando palabra',
    html: 'Generando palabra en <b></b> milisegundos.',
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
})
})

function playerRules() {
    document.getElementById("rules").style.display = "none";
    document.getElementById("buttonRules").style.display = "none";
}

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
    id('result').innerHTML = '';

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
        id('result').innerHTML ="Perdiste, la palabra era " + littleLetters + " " + "Te quedan 24 horas de vida";
        gameOver( );
    }else if(numberHits == littleLetters.length){
        id('result').innerHTML = "Ganaste, podrás vivir un día mas!!";
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


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: 'Ahorcado',
    body: 'Usuario',
    userId: 1,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((date) => console.log(date));