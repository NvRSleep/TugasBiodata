// Example: Fade-in Animation for Bio Section
const bioSection = document.querySelector('.bio');

bioSection.style.opacity = '0'; // Initially hidden
bioSection.style.transition = 'opacity 0.5s ease-in-out'; // Smooth transition

window.addEventListener('load', () => {
  bioSection.style.opacity = '1'; // Fade in
});

// Add similar animations for other sections as needed.