export function initLanding(elements) {
  const {
    burgerMenu,
    getStartBtn,
    demoBtn,
    featuresMobileContainer,
    mobileFeaturesLink,
    mobileHomeLink,
    themeToggle,
    mobileThemeToggle,
    mobileAuthLoginBtn,
    authContainer,
    loginWrapper,
    toSignup,
  } = elements;

  let allClickableBtn = [getStartBtn, demoBtn];

  let mobileContainerOpen = false;
  let authContainerOpen = false;

  const savedTheme = localStorage.getItem("theme");

  document.body.classList.remove("light-mode", "dark-mode");
  document.body.classList.add(
    savedTheme === "dark" ? "dark-mode" : "light-mode",
  );

  if (savedTheme === "dark") {
    mobileThemeToggle.innerHTML = `<img src="icons/dark-mode.svg"> Dark`;
  } else {
    mobileThemeToggle.innerHTML = `<img src="icons/light-mode.svg"> Light`;
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

  mobileHomeLink.addEventListener("click", () => {
    closeMobileContainer();
  });

  mobileFeaturesLink.addEventListener("click", () => {
    closeMobileContainer();
  });

  function closeMobileContainer() {
    if (authContainerOpen) {
      burgerMenu.innerText = "X";
      featuresMobileContainer.style.top = "-55vh";
      document.body.style.overflowY = "auto";
      authContainerOpen = false;
      allClickableBtn.forEach((homeBtn) => {
        homeBtn.style.pointerEvents = "none";
      });
    } else {
      burgerMenu.innerText = "☰";
      featuresMobileContainer.style.top = "-55vh";
      authClose();
      mobileContainerOpen = false;
      authContainerOpen = false;
      document.body.style.overflowY = "auto";
      allClickableBtn.forEach((homeBtn) => {
        homeBtn.style.pointerEvents = "auto";
      });
      authClose();
    }
  }

  themeToggle.addEventListener("click", () => {
    themeFunc();
  });

  mobileThemeToggle.addEventListener("click", () => {
    themeFunc();
  });

  mobileAuthLoginBtn.addEventListener("click", () => {
    if (!authContainerOpen) {
      authContainerOpen = true;
      authOpen();
      closeMobileContainer();
      return;
    }
  });

  toSignup.addEventListener("click", () => {});

  function themeFunc() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggle.innerText = "Light";
      mobileThemeToggle.innerHTML = `<img src="icons/dark-mode.svg" alt="Dark Mode"> Dark`;
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.innerText = "Dark";
      mobileThemeToggle.innerHTML = `<img src="icons/light-mode.svg" alt="Light Mode"> Light`;
    }
  }

  function authOpen() {
    authContainer.style.display = "flex";
    if (mobileAuthLoginBtn) {
      loginWrapper.style.width = "100%";
    } else {
      console.log("Test");
    }
  }

  function authClose() {
    authContainer.style.display = "none";
  }
}
