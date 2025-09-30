function progress(time) {
  const progressBar = document.createElement('div');
  progressBar.style.height = `20px`;
  progressBar.style.width = `0px`;
  progressBar.style.backgroundColor = `blueviolet`;
  setTimeout(() => {
    progressBar.style.width = `500px`;
    progressBar.style.transition = `width ${time}s`;
  }, 4000);
  document.body.append(progressBar);
};
progress(2);

