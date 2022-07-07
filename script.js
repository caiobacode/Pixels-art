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

const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const p4 = document.querySelector('#p4')
const p5 = document.querySelector('#p5')
const p6 = document.querySelector('#p6')
const p7 = document.querySelector('#p7')
const p8 = document.querySelector('#p8')
const p9 = document.querySelector('#p9')
const p10 = document.querySelector('#p10')
const p11 = document.querySelector('#p11')
const p12 = document.querySelector('#p12')
const p13 = document.querySelector('#p13')
const p14 = document.querySelector('#p14')
const p15 = document.querySelector('#p15')
const p16 = document.querySelector('#p16')
const p17 = document.querySelector('#p17')
const p18 = document.querySelector('#p18')
const p19 = document.querySelector('#p19')
const p20 = document.querySelector('#p20')
const p21 = document.querySelector('#p21')
const p22 = document.querySelector('#p22')
const p23 = document.querySelector('#p23')
const p24 = document.querySelector('#p24')
const p25 = document.querySelector('#p25')

p1.addEventListener('click', function() {
    p1.id = corSelected.id;
});

p2.addEventListener('click', function() {
    p2.id = corSelected.id;
});

p3.addEventListener('click', function() {
    p3.id = corSelected.id;
});

p4.addEventListener('click', function() {
    p4.id = corSelected.id;
});

p5.addEventListener('click', function() {
    p5.id = corSelected.id;
});

p6.addEventListener('click', function() {
    p6.id = corSelected.id;
});

p7.addEventListener('click', function() {
    p7.id = corSelected.id;
});

p8.addEventListener('click', function() {
    p8.id = corSelected.id;
});

p9.addEventListener('click', function() {
    p9.id = corSelected.id;
});

p10.addEventListener('click', function() {
    p10.id = corSelected.id;
});

p11.addEventListener('click', function() {
    p11.id = corSelected.id;
});

p12.addEventListener('click', function() {
    p12.id = corSelected.id;
});

p13.addEventListener('click', function() {
    p13.id = corSelected.id;
});

p14.addEventListener('click', function() {
    p14.id = corSelected.id;
});

p15.addEventListener('click', function() {
    p15.id = corSelected.id;
});

p16.addEventListener('click', function() {
    p16.id = corSelected.id;
});

p17.addEventListener('click', function() {
    p17.id = corSelected.id;
});

p18.addEventListener('click', function() {
    p18.id = corSelected.id;
});

p19.addEventListener('click', function() {
    p19.id = corSelected.id;
});

p20.addEventListener('click', function() {
    p20.id = corSelected.id;
});

p21.addEventListener('click', function() {
    p21.id = corSelected.id;
});

p22.addEventListener('click', function() {
    p22.id = corSelected.id;
});

p23.addEventListener('click', function() {
    p23.id = corSelected.id;
});

p24.addEventListener('click', function() {
    p24.id = corSelected.id;
});

p25.addEventListener('click', function() {
    p25.id = corSelected.id;
});



