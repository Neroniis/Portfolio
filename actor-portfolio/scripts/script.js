document.addEventListener('DOMContentLoaded', () => {
  const aboutCard = document.querySelector('.about-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutCard.classList.add('visible');
      }
    });
  }, {
    threshold: 0.5
  });

  if (aboutCard) {
    observer.observe(aboutCard);
  }
});
