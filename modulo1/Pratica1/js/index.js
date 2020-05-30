window.addEventListener('load', start);

function start() {
  divSquare = document.querySelector('#square');
  divSquare.style.backgroundColor = 'rgb(0, 0, 0)';

  rangeR = document.querySelector('#range-r');
  rangeR.addEventListener('change', range);

  rangeG = document.querySelector('#range-g');
  rangeG.addEventListener('change', range);

  rangeB = document.querySelector('#range-b');
  rangeB.addEventListener('change', range);
}

function range(event) {
  textR = document.querySelector('#text-r');
  textG = document.querySelector('#text-g');
  textB = document.querySelector('#text-b');
  switch (event.target.attributes.id.value) {
    case 'range-r': {
      textR.value = event.target.value;
      square(event.target.value, textG.value, textB.value);
      break;
    }
    case 'range-g': {
      textG.value = event.target.value;
      square(textR.value, event.target.value, textB.value);
      break;
    }
    case 'range-b': {
      textB.value = event.target.value;
      square(textR.value, textG.value, event.target.value);
      break;
    }
  }
}

function square(valueR, valueG, valueB) {
  divSquare = document.querySelector('#square');
  divSquare.style.backgroundColor = `rgb(${valueR}, ${valueG}, ${valueB})`;
  console.log(divSquare.style.backgroundColor);
}
