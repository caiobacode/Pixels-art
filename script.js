const cor1 = document.getElementsByClassName('color-1')
const cor2 = document.getElementById('color-2');
const cor3 = document.getElementById('color-3');
const cor4 = document.getElementById('color-4');
const pixels = document.getElementsByClassName('pixel')

let cor_selecionada;

pixels.addEventListener('click' , function() {
    pixels.className = 'pixel margem-geral ' + cor1;
});


