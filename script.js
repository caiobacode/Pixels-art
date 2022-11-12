const cor1 = document.getElementById('color-1');
const cor2 = document.getElementById('color-2');
const cor3 = document.getElementById('color-3');
const cor4 = document.getElementById('color-4');
let corSelected;
const colorString = 'color  selected';

cor1.addEventListener('click', () => {
  cor1.className = colorString;
  if (corSelected !== cor1) {
    corSelected.className = 'color';
  }
  corSelected = cor1;
});

cor2.addEventListener('click', () => {
  cor2.className = colorString;
  if (corSelected !== cor2) {
    corSelected.className = 'color';
  }
  corSelected = cor2;
});

cor3.addEventListener('click', () => {
  cor3.className = colorString;
  if (corSelected !== cor3) {
    corSelected.className = 'color';
  }
  corSelected = cor3;
});

cor4.addEventListener('click', () => {
  cor4.className = colorString;
  if (corSelected !== cor4) {
    corSelected.className = 'color';
  }
  corSelected = cor4;
});

const createCleanBtn = () => {
  const section = document.getElementById('clean-div');
  const cleanBtn = document.createElement('button');
  const pixels = document.querySelectorAll('.pixel');
  cleanBtn.innerText = 'Limpar';
  cleanBtn.addEventListener('click', () => {
    pixels.forEach((i) => {
      // eslint-disable-next-line no-param-reassign
      i.id = '';
    });
  });
  console.log(cleanBtn);
  section.appendChild(cleanBtn);
};

const createPixels = (n) => {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.style.width = `${(n * 42) + 2}px`;
  for (let i = 0; i < (n * n); i += 1) {
    const teste = document.createElement('li');
    teste.classList.add('pixel');
    // eslint-disable-next-line no-loop-func
    teste.addEventListener('click', () => {
      teste.id = corSelected.id;
    });
    pixelBoard.appendChild(teste);
  }
};

window.onload = () => {
  createPixels(5);
  createCleanBtn();
  corSelected = cor1;
  corSelected.className = colorString;
};
