const cor1 = document.getElementById('color-1');
const cor2 = document.getElementById('color-2');
const cor3 = document.getElementById('color-3');
const cor4 = document.getElementById('color-4');
const sel = document.getElementsByClassName('selected')
let corSelected;
window.onload = function () {
    corSelected = cor1
    corSelected.className = 'color ' + 'selected';
}

cor1.addEventListener('click', function() {
    cor1.className = 'color ' + 'selected';
    if (corSelected !== cor1) {
    corSelected.className = 'color'
    }
    corSelected = cor1
})

cor2.addEventListener('click', function() {
    cor2.className = 'color ' + 'selected'
    if (corSelected !== cor2) {
    corSelected.className = 'color'
    }
    corSelected = cor2 
})

cor3.addEventListener('click', function() {
    cor3.className = 'color ' + 'selected'
    if (corSelected !== cor3) {
    corSelected.className = 'color'
    }
    corSelected = cor3
})

cor4.addEventListener('click', function() {
    cor4.className = 'color ' + 'selected'
    if (corSelected !== cor4) {
    corSelected.className = 'color'
    }
    corSelected = cor4
})

//let pixelsLine1 = []
//for (index = 1; index < 6; index += 1) {
//    pixelsLine1.push(index);
//npm  } 
//const p1 = document.querySelector('#linha-1')

//p1.addEventListener('click', function() {
    //p1.className = 'pixel ' + corSelected;
//});
