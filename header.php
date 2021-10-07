<header>
  <div class="headerContainer">
    <div class="headerContainer__backgroundLogo">
      <a href="index.php">
        <img class="headerContainer__backgroundLogo__logo" src="./assets/logo_resized.svg" alt="logo what's the plant" />
      </a>
    </div>
  </div>
  <label class="headerContainer__switch">
    <input type="checkbox" onclick="toggleDarkMode()" />
    <span class="headerContainer__switch__slider round"></span>
  </label>
  <nav>
    <section class="hero">
      <a href="index.php">
        <h1 class="hero__title">What's The Plant ?!</h1>
      </a>
    </section>
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <a class="menuLink" href="addPlant.php">
          <li>Add a Plant</li>
        </a>
        <a class="menuLink" href="#">
          <li>Dictionary</li>
        </a>
      </ul>
    </div>
  </nav>
</header>