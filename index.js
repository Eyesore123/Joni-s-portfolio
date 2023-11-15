// Create particle array
let particles = [];
const numParticles = 1000;

// Get canvas element and its 2d context
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Set canvas width and height to match window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for(let i = 0; i < numParticles; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2, 
    speedX: Math.random() * 3 - 1.5,
    speedY: Math.random() * 3 - 1.5
  });
}

// Draw particles
function draw() {
  requestAnimationFrame(draw);
  
  // Set canvas width and height to match window size on each frame
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(255,255,255,0.5)';
    context.fill();
  });
}

// Initialize canvas and start draw loop
draw();