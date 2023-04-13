import { Notify } from "notiflix/build/notiflix-notify-aio";

const form = document.querySelector('.form')
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

form.addEventListener("submit", onSubmitForm);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  })
}

function onSubmitForm(e) {
  e.preventDefault();

  let delayValue = Number(delay.value);
  let stepValue = Number(step.value);
  let amountValue = Number(amount.value);

    for (let i = 1; i <= amountValue; i += 1) {

      createPromise(i, delayValue)
        .then(({ position, delay }) => {
          Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
            width: '400px',
            fontSize: '20px',
          },);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
            width: '400px',
            fontSize: '20px',
          },);
        });
      delayValue += stepValue;
    }
  form.reset();
}