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
