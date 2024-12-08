document.addEventListener('DOMContentLoaded', () => {
  const bio = document.querySelector('#bio');
  bio.style.opacity = 0;
  bio.style.transition = 'opacity 1s ease-in-out';

  setTimeout(() => {
    bio.style.opacity = 1;
  }, 500);
});
