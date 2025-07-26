import "./style.css";

document.querySelector("#app").innerHTML = `
  <header>
    <nav>
      <div class="nav-left">
        <img src="/logo.png" alt="Logo" class="logo" />
      </div>

      <input type="checkbox" id="nav-toggle" class="nav-toggle" />
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>

      <div class="nav-right">
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#about">About</a>
      </div>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-content">
      <p id="typed-text"></p>
    </div>
  </section>
`;

const text = `a trash software developer from Morocco,
My favorite band is Pendulum ,this portfolio is still in progress ..`;

let i = 0;
const speed = 40; // typing speed in ms

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();

// ASCII Wave Animation
const asciiBg = document.getElementById('ascii-bg');
if (asciiBg) {
  const width = 80; // characters per line
  const height = 24; // number of lines
  const chars = [' ', '.', '-', '~', '*', '=', '%', '#', '@'];
  let t = 0;

  function renderWave() {
    let output = '';
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // Wave formula
        const wave = Math.sin((x / 6) + (t / 7)) + Math.cos((y / 3) + (t / 5));
        // Map wave value to character
        const idx = Math.floor(((wave + 2) / 4) * (chars.length - 1));
        output += chars[idx];
      }
      output += '\n';
    }
    asciiBg.textContent = output;
    t += 0.2;
    requestAnimationFrame(renderWave);
  }

  renderWave();
}
