let hasScrolled = false;

document.querySelector('.play-pause').addEventListener('click', function () {
  if (!hasScrolled) {
    const targetElement = document.querySelector('.page-hero');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      hasScrolled = true;
    }
  }
});
