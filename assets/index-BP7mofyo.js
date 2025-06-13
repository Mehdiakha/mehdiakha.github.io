(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
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
`;const i=`a trash software developer from Morocco,
My favorite band is Pendulum ,this portfolio is still in progress ..`;let s=0;const a=40;function c(){s<i.length&&(document.getElementById("typed-text").innerHTML+=i.charAt(s),s++,setTimeout(c,a))}c();
