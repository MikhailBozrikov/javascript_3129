const progressBar = document.createElement('div');
progressBar.classList.add("progress-bar");

function progress(time) {
  setInterval(() => {
    progressBar.style.opacity = '1';
    progressBar.style.width = `500px`;
    progressBar.style.transition = `width ${time}s`;

    setTimeout(() => {
      progressBar.style.width = '0px';
      progressBar.style.opacity = '0';
    }, 2000);
  }, 4000);
};
progress(2);

document.body.append(progressBar);
