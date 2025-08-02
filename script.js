// Efek Ketikan
const text = "Kamu adalah bab terindah dalam buku kehidupanku. Terima kasih telah memilihku, mencintaiku, dan menemaniku. 💗";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;

// Animasi Bunga Jatuh
const canvas = document.getElementById("bungaCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bunga = [];

function Flower() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * -canvas.height;
  this.size = Math.random() * 20 + 20;
  this.speed = Math.random() * 2 + 1;
  this.image = new Image();
  this.image.src = "bunga.png"; // Gambar bunga transparan PNG
}

Flower.prototype.update = function () {
  this.y += this.speed;
  if (this.y > canvas.height) {
    this.y = 0;
    this.x = Math.random() * canvas.width;
  }
};

Flower.prototype.draw = function () {
  ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
};

function init() {
  for (let i = 0; i < 40; i++) {
    bunga.push(new Flower());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bunga.forEach(b => {
    b.update();
    b.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
