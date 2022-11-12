const options = document.getElementById('options');
const pallete = document.getElementById('color-palette');
let corSelected;
const colorSelected = 'color  selected';

const createPixels = (n, called) => {
  const pixelBoard = document.getElementById('pixel-board');
  if (called) pixelBoard.innerHTML = '';
  pixelBoard.style.width = `${(n * 42) + 2}px`;
  for (let i = 0; i < (n * n); i += 1) {
    const teste = document.createElement('li');
    teste.className = ('pixel');
    // eslint-disable-next-line no-loop-func
    teste.addEventListener('click', () => {
      console.log(corSelected);
      console.log('vimca');
      teste.style.backgroundColor = corSelected.style.backgroundColor;
    });
    pixelBoard.appendChild(teste);
  }
};

const inputBtn = () => {
  const input = document.querySelector('.input');
  if (!input.value) {
    window.alert('Board inválido!');
    return;
  }
  const value = input.value > 50 ? 50 : input.value;
  const valueNegative = value < 5 ? 5 : value;
  createPixels(valueNegative, true);
};

const createInput = () => {
  const newInput = document.createElement('input');
  newInput.type = 'number';
  newInput.min = '1';
  newInput.id = 'board-size';
  newInput.classList.add('input');
  const newBtn = document.createElement('button');
  newBtn.type = 'button';
  newBtn.id = 'generate-board';
  newBtn.classList.add('input-btn');
  newBtn.innerText = 'VQV';
  newBtn.addEventListener('click', () => {
    inputBtn();
  });
  options.appendChild(newInput);
  options.appendChild(newBtn);
};

const createRandomColor = () => {
  const randomNumber = () => Math.floor(Math.random() * 255 + 1);
  const color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  const palet = document.createElement('div');
  palet.classList.add('color');
  palet.style.backgroundColor = color;
  palet.addEventListener('click', () => {
    palet.className = colorSelected;
    if (corSelected !== palet) {
      corSelected.className = 'color';
    }
    corSelected = palet;
  });
  return palet;
};

const createBlackColor = () => {
  const thatColor = document.createElement('div');
  thatColor.className = ('color  selected');
  thatColor.style.backgroundColor = 'black';
  corSelected = thatColor;
  thatColor.addEventListener('click', () => {
    thatColor.className = colorSelected;
    if (corSelected !== thatColor) {
      corSelected.className = 'color';
    }
    corSelected = thatColor;
  });
  return thatColor;
};

const createPallete = () => {
  console.log(pallete);
  const color1 = createBlackColor();
  const color2 = createRandomColor();
  const color3 = createRandomColor();
  const color4 = createRandomColor();
  pallete.appendChild(color1);
  pallete.appendChild(color2);
  pallete.appendChild(color3);
  pallete.appendChild(color4);
};

const createCleanBtn = () => {
  const pixels = document.querySelectorAll('.pixel');
  const cleanBtn = document.createElement('button');
  cleanBtn.id = 'clear-board';
  cleanBtn.innerText = 'Limpar';
  cleanBtn.addEventListener('click', () => {
    pixels.forEach((i) => {
      console.log(i.style.backgroundColor);
      // eslint-disable-next-line no-param-reassign
      i.style.backgroundColor = 'white';
    });
  });
  options.appendChild(cleanBtn);
};

window.onload = () => {
  createPallete();
  createPixels(5, false);
  createCleanBtn();
  createInput();
};
