export function initLanding(elements) {
  const {
    burgerMenu,
    getStartBtn,
    demoBtn,
    featuresMobileContainer,
    themeToggle,
    mobileThemeToggle,
  } = elements;

  let allClickableBtn = [getStartBtn, demoBtn];

  let mobileContainerOpen = false;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.body.classList.remove("light-mode", "dark-mode"); // reset
    document.body.classList.add(
      savedTheme === "dark" ? "dark-mode" : "light-mode",
    );
  }

  getStartBtn.addEventListener("click", () => {
    alert("Hello");
  });

  burgerMenu.addEventListener("click", (e) => {
    if (!mobileContainerOpen) {
      e.stopPropagation();
      burgerMenu.innerText = "X";
      featuresMobileContainer.style.top = "10vh";
      mobileContainerOpen = true;
      document.body.style.overflowY = "hidden";
      allClickableBtn.forEach((homeBtn) => {
        homeBtn.style.pointerEvents = "none";
      });
    } else {
      closeMobileContainer();
    }
  });

  function closeMobileContainer() {
    burgerMenu.innerText = "☰";
    featuresMobileContainer.style.top = "-40vh";
    mobileContainerOpen = false;
    document.body.style.overflowY = "auto";
    allClickableBtn.forEach((homeBtn) => {
      homeBtn.style.pointerEvents = "auto";
    });
  }

  themeToggle.addEventListener("click", () => {
    themeFunc();
  });

  mobileThemeToggle.addEventListener("click", () => {
    themeFunc();
  });

  function themeFunc() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggle.innerText = "Light";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.innerText = "Dark";
    }
  }
}
