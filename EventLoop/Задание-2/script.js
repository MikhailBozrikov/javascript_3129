function progress(time) {
  const progressBar = document.createElement('div');
  progressBar.classList.add('progressBar');
  const timeElement = document.createElement('div');
  let currentTime = 0;
  timeElement.textContent = `${currentTime}s`;
  document.body.append(progressBar, timeElement);

  progressBar.style.transition = `transform ${time}s linear`;

  setTimeout(() => {
    progressBar.style.transform = 'scaleX(1)';
  }, 50);

  const timeInterval = setInterval(() => {
    currentTime += 1;
    timeElement.textContent = `${currentTime}s`;
  }, 1000);

  setTimeout(() => {
    clearInterval(timeInterval);
  }, time * 1000);
}

progress(5);


