const hoursHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

// Смена фона в зависимости от времени
const nowBackground = new Date();
const hoursBackground = nowBackground.getHours();
const backgroundImage = document.querySelector('body');

if (hoursBackground < 7) {
  backgroundImage.style.background =
    "url('background-day.jpg') center / cover no-repeat";
} else {
  backgroundImage.style.background =
    "url('background-night.jpg') center / cover no-repeat";
}

function setDate() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hoursDegrees = (hours / 12) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const secondsDegrees = (seconds / 60) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // console.log(now);
}

setInterval(setDate, 1000);
