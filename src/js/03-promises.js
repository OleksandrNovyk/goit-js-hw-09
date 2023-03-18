import Notiflix from 'notiflix';

document.body.style.backgroundColor = '#eee0ae';
const form = document.querySelector('.form');
const options = {
  position: 'center-bottom',
  distance: '15px',
  borderRadius: '15px',
  timeout: 8000,
  clickToClose: true,
  cssAnimationStyle: 'from-bottom',
};

form.addEventListener('submit', onSubmitForm);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmitForm(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;
  if (delay.value < 0 || step.value < 0 || amount.value < 0) {
    Notiflix.Notify.warning(`❗ Please enter a positive number`);
  } else {
    for (let i = 0; i < amount.value; i++) {
      let position = i + 1;
      const delays = Number(delay.value) + step.value * i;

      createPromise(position, delays)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`, options
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`, options
          );
        });
    }
  }
  event.currentTarget.reset();
}

