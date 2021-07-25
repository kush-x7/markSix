'use strict';

const btnTranslate = document.querySelector('.translate');
const btnReset = document.querySelector('.reset');

const inputMsg = document.querySelector('#inputMsg');
const outputMsg = document.querySelector('.right');

const url = "https://api.funtranslations.com/translate/minion.json";


function updatedUrl(text) {
    return `${url}?text=${text}`;
};
    

btnTranslate.addEventListener('click', () => {

    outputMsg.textContent = "Translating...";

    fetch(updatedUrl(inputMsg.value))
        .then(response => response.json())
        .then(json => {
            outputMsg.textContent = json.contents.translated;
        })
        .catch(error => outputMsg.textContent = "server error" );
    
});


btnReset.addEventListener('click', () => {
    inputMsg.value ="";
    outputMsg.textContent = "";
    
});












