const bodyChangeColor = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const buttonReset = document.querySelector('[data-reset]');


let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStop.setAttribute('disabled', '');

buttonStart.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  buttonStop.removeAttribute('disabled');      //доки зміна теми запущена, кнопка «Stop» неактивна (disabled).

  timerId = setInterval(() => {
    bodyChangeColor.style.backgroundColor = getRandomHexColor();
    buttonStart.style.backgroundColor = getRandomHexColor();  // фіча
    buttonStop.style.backgroundColor = getRandomHexColor();   // фіча
  }, 1000);
});

buttonStop.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  buttonStart.removeAttribute('disabled');
//   buttonStop.style.backgroundColor = getRandomHexColor();
  clearInterval(timerId);
});

buttonReset.addEventListener('click', () => {    // фіча
  location.reload()                             // фіча
});                                            // фіча

