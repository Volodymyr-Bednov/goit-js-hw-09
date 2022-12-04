import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';

let timerId = null;
const startBtn = document.querySelector('[data-start]');
const inputDate = document.querySelector('input#datetime-picker');
const diffDays = document.querySelector('[data-days]');
const diffHours = document.querySelector('[data-hours]');
const diffMinutes = document.querySelector('[data-minutes]');
const diffSeconds = document.querySelector('[data-seconds]');
const defValue = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

startBtn.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //console.log(this.);
    const selectDate = selectedDates[0];
    if (selectDate < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
      clearInterval(timerId);
      renderTimer(defValue);

      return;
    }
    startBtn.disabled = false;
  },
};

const flatpickrRef = flatpickr('input#datetime-picker', options);

const addLeadingZero = value => value.toString().padStart(2, '0');

const setValues = () => {
  const parseInputDte = new Date(inputDate.value);
  const diffDate = parseInputDte - new Date();
  const values = convertMs(diffDate);
  renderTimer(values);
};

const renderTimer = ({ days, hours, minutes, seconds }) => {
  diffDays.textContent = addLeadingZero(days);
  diffHours.textContent = addLeadingZero(hours);
  diffMinutes.textContent = addLeadingZero(minutes);
  diffSeconds.textContent = addLeadingZero(seconds);
};

startBtn.addEventListener('click', evt => {
  flatpickrRef.element.disabled = true;
  //console.log(flatpickrRef.element.disabled);
  inputDate.setAttribute('disabled', 'disabled');

  evt.target.disabled = true;
  timerId = setInterval(setValues, 1000);
});
