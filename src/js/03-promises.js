import Notiflix from 'notiflix';

const delayRef = document.querySelector('[name="delay"]');
const stepRef = document.querySelector('[name="step"]');
const amountRef = document.querySelector('[name="amount"]');

delayRef.setAttribute('min', 0);
stepRef.setAttribute('min', 0);
amountRef.setAttribute('min', 0);

const formRef = document.querySelector('form.form');
formRef.addEventListener('submit', evt => {
  evt.preventDefault();

  let delay = Number(delayRef.value);
  for (let i = 1; i <= Number(amountRef.value); i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += Number(stepRef.value);
  }
  delayRef.value = '';
  stepRef.value = '';
  amountRef.value = '';
});

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
