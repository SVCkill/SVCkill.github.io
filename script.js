// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Liquid Ether Background - pełny kod z reactbits.dev, przerobiony na vanilla JS
const canvas = document.getElementById('liquid-ether-canvas');
const ctx = canvas.getContext('2d');

let mouseX = 0;
let mouseY = 0;
const mouseForce = 20;
const colorStops = [
  { position: 0, color: '#3b82f6' },
  { position: 0.5, color: '#a855f7' },
  { position: 1, color: '#ec4899' }
];

class Blob {
  constructor(x, y, radius, velocityX, velocityY, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;
    this.phase = Math.random() * Math.PI * 2;
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.phase += 0.02;

    // Bounce off walls
    if (this.x < this.radius || this.x > canvas.width - this.radius) {
      this.velocityX *= -1;
    }
    if (this.y < this.radius || this.y > canvas.height - this.radius) {
      this.velocityY *= -1;
    }

    // Mouse interaction
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 100) {
      const force = (100 - distance) / 100 * mouseForce;
      this.velocityX += (dx / distance) * force;
      this.velocityY += (dy / distance) * force;
    }

    // Pulsing radius
    this.radius = 20 + Math.sin(this.phase) * 10;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = this.color + '80';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

let blobs = [];
const numBlobs = 15;

function initBlobs() {
  blobs = [];
  for (let i = 0; i < numBlobs; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 20 + 10;
    const velocityX = (Math.random() - 0.5) * 2;
    const velocityY = (Math.random() - 0.5) * 2;
    const color = `hsl(${Math.random() * 360}, 70%, 50%)`;
    blobs.push(new Blob(x, y, radius, velocityX, velocityY, color));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw gradient background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  colorStops.forEach(stop => {
    gradient.addColorStop(stop.position, stop.color);
  });
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Update and draw blobs
  blobs.forEach(blob => {
    blob.update();
    blob.draw();
  });

  // Connect blobs with lines for ether effect
  for (let i = 0; i < blobs.length; i++) {
    for (let j = i + 1; j < blobs.length; j++) {
      const dx = blobs[i].x - blobs[j].x;
      const dy = blobs[i].y - blobs[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 150) {
        ctx.beginPath();
        ctx.moveTo(blobs[i].x, blobs[i].y);
        ctx.lineTo(blobs[j].x, blobs[j].y);
        ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / 150})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initBlobs();
}

window.addEventListener('resize', resizeCanvas);
canvas.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  mouseX = e.touches[0].clientX;
  mouseY = e.touches[0].clientY;
});

resizeCanvas();
animate();

console.log('Liquid Ether background loaded – wygląda jak z przyszłości, co nie?');
