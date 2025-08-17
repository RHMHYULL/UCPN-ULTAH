
// Fungsi cek password
function openLetter() {
  let pw = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (pw === "12345") { // ganti password sesuai keinginan
    document.getElementById("envelope").style.display = "none";
    document.getElementById("message").style.display = "block";
  } else {
    error.textContent = "❌ Password salah!";
  }
}

// Buat love jatuh
function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animation = "fall 5s linear";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 700);

// Animasi jatuh
let style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { top: -10%; opacity: 1; }
  100% { top: 100%; opacity: 0; }
}`;
document.head.appendChild(style);
// Fungsi cek password
function openLetter() {
  let pw = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (pw === "12345") { // ganti password sesuai keinginan
    document.getElementById("envelope").style.display = "none";
    document.getElementById("message").style.display = "block";
  } else {
    error.textContent = "❌ Password salah!";
  }
}

// Buat love jatuh
function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animation = "fall 5s linear";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 700);

// Animasi jatuh
let style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { top: -10%; opacity: 1; }
  100% { top: 100%; opacity: 0; }
}`;
document.head.appendChild(style);
// Fungsi cek password
function openLetter() {
  let pw = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (pw === "12345") { // ganti password sesuai keinginan
    document.getElementById("envelope").style.display = "none";
    document.getElementById("message").style.display = "block";
  } else {
    error.textContent = "❌ Password salah!";
  }
}

// Buat love jatuh
function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animation = "fall 5s linear";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 700);

// Animasi jatuh
let style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { top: -10%; opacity: 1; }
  100% { top: 100%; opacity: 0; }
}`;
document.head.appendChild(style);

const images = ["assets/images/foto.png", "assets/images/foto.png", "assets/images/foto.png"];

function createLove() {
  const love = document.createElement("img");
  love.src = images[Math.floor(Math.random() * images.length)];
  love.classList.add("love");

  // posisi horizontal acak
  love.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(love);

  // hapus love setelah animasi selesai
  setTimeout(() => {
    love.remove();
  }, 6000);
}

// buat love tiap 1 detik
setInterval(createLove, 1000);

// daftar foto untuk diisi ke dalam bentuk love
const fotoList = [
  "assets/foto.png",
  "assets/foto.png",
  "assets/foto.png",
  "assets/foto.png"
];

function createLove() {
  const love = document.createElement("div");
  love.classList.add("love");

  // pilih foto random
  const fotoAcak = fotoList[Math.floor(Math.random() * fotoList.length)];
  love.style.backgroundImage = `url(${fotoAcak})`;

  // posisi horizontal acak
  love.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(love);

  // hapus setelah animasi selesai
  setTimeout(() => {
    love.remove();
  }, 5000);
}

// munculin love setiap 800ms
setInterval(createLove, 800);
const love = document.createElement('img');
love.src = "assets/foto.png"; // harus berbentuk hati
love.classList.add('love');
// Buat love jatuh
function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animation = "fall 5s linear";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 700);

// Animasi jatuh
let style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { top: -10%; opacity: 1; }
  100% { top: 100%; opacity: 0; }
}`;
document.head.appendChild(style);
function createHeart(layerId) {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 20 + "px"; // ukuran berbeda
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s"; // kecepatan berbeda
  heart.style.opacity = Math.random() * 0.5 + 0.5; // transparansi berbeda

  document.getElementById(layerId).appendChild(heart);

  setTimeout(() => heart.remove(), 7000); // hapus setelah animasi selesai
}

// Buat love jatuh di beberapa layer
setInterval(() => createHeart("hearts-layer1"), 300);
setInterval(() => createHeart("hearts-layer2"), 500);
setInterval(() => createHeart("hearts-layer3"), 700);
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const correctPassword = "19082003";
  const music = document.getElementById("bgMusic");

  if(input === correctPassword){
    document.getElementById("passwordBox").style.display = "none";
    document.getElementById("contentBox").style.display = "flex";

    // jalankan efek love
    startLoveEffect();

    // putar musik
    music.play();
  } else {
    document.getElementById("errorMsg").style.display = "block";
  }
}