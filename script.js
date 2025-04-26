// Get the card element
const card = document.querySelector('.card');
const scene = document.querySelector('.scene');

// Store hover state
let isHovering = false;

// Add event listener for mouse hover
scene.addEventListener('mouseenter', () => {
  isHovering = true;
  // Pause animations when hovering
  card.style.animationPlayState = 'paused';
  // Add intense glow class
  card.classList.add('glow-intense');
});

scene.addEventListener('mouseleave', () => {
  isHovering = false;
  // Resume animations when not hovering
  card.style.animationPlayState = 'running';
  // Reset any custom transform
  card.style.transform = '';
  // Remove intense glow class
  card.classList.remove('glow-intense');
});

// Add mouse move effect for more interactivity
document.addEventListener('mousemove', (e) => {
  if (!isHovering) return;
  
  const rect = card.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Calculate the mouse position relative to the center of the card
  const mouseX = e.clientX - centerX;
  const mouseY = e.clientY - centerY;
  
  // Calculate rotation based on mouse position (with limits)
  const maxRotation = 25;
  const rotateY = mouseX / (rect.width / 2) * maxRotation;
  const rotateX = -mouseY / (rect.height / 2) * maxRotation;
  
  // Apply the rotation
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});