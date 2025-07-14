document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const cards = Array.from(track.children);
  const leftArrow = document.querySelector('.carousel-arrow.left');
  const rightArrow = document.querySelector('.carousel-arrow.right');
  let currentIndex = 0;

  function updateCarousel(index) {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }

  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel(currentIndex);
    }
  });

  rightArrow.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel(currentIndex);
    }
  });

  // Animate the friend image when in view
// Animate the friend image from bottom when in view
const friendImage = document.querySelector('.friend-fade-in');
if (friendImage) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        friendImage.classList.add('visible');
        observer.unobserve(friendImage); // only animate once
      }
    });
  }, { threshold: 0.3 });

  observer.observe(friendImage);
}

  // Initial load
  updateCarousel(currentIndex);
});