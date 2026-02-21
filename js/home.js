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
    mobileAuthSigninBtn,
    authContainer,
    loginWrapper,
    signupWrapper,
    toLogin,
    toSignup,
    togglePass,
  } = elements;

  let allClickableBtn = [getStartBtn, demoBtn];

  let mobileContainerOpen = false;
  let authContainerOpen = false;
  let authMode = null;

  togglePass.forEach((btn) => {
    btn.addEventListener("click", () => {
      const fieldControl = btn.closest(".field-control");
      const input = fieldControl.querySelector("input");

      if (input.type === "password") {
        input.type = "text";
        btn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
      } else {
        input.type = "password";
        btn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
      }
    });
  });

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
      authContainerOpen = false;
      featuresMobileContainer.style.top = "-55vh";
      document.body.style.overflowY = "auto";
      allClickableBtn.forEach((homeBtn) => {
        homeBtn.style.pointerEvents = "none";
      });
    } else {
      burgerMenu.innerText = "☰";
      featuresMobileContainer.style.top = "-55vh";
      mobileContainerOpen = false;

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
      authMode = "login";
      authContainerOpen = true;
      authOpen();
      closeMobileContainer();
      return;
    }
  });

  mobileAuthSigninBtn.addEventListener("click", () => {
    if (!authContainerOpen) {
      authMode = "signup";
      authContainerOpen = true;
      authOpen();
      closeMobileContainer();
      return;
    }
  });

  toLogin.addEventListener("click", () => {
    signupWrapper.style.width = "0%";
    loginWrapper.style.width = "100%";
  });

  toSignup.addEventListener("click", () => {
    signupWrapper.style.width = "100%";

    loginWrapper.style.width = "0%";
  });

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
    if (authMode === "login") {
      loginWrapper.style.width = "100%";
      signupWrapper.style.width = "0%";
    } else if (authMode === "signup") {
      signupWrapper.style.width = "100%";
      loginWrapper.style.width = "0%";
      console.log("Test");
    }
  }

  function authClose() {
    authContainer.style.display = "none";
    authMode = null;
    authContainerOpen = false;
  }
}
