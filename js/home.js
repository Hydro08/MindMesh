export function initLanding(elements) {
  const {
    burgerMenu,
    homeSection,
    getStartBtn,
    demoBtn,
    featuresMobileContainer,
  } = elements;

  let allClickableBtn = [getStartBtn, demoBtn];

  let mobileContainerOpen = false;

  getStartBtn.addEventListener("click", () => {
    alert("Hello");
  });

  burgerMenu.addEventListener("click", (e) => {
    if (!mobileContainerOpen) {
      e.stopPropagation();
      burgerMenu.innerText = "X";
      featuresMobileContainer.style.right = "0";
      mobileContainerOpen = true;
      document.body.style.overflowY = "hidden";
      allClickableBtn.forEach((homeBtn) => {
        homeBtn.style.pointerEvents = "none";
      });
    } else {
      closeMobileContainer();
    }
  });

  homeSection.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMobileContainer();
  });

  function closeMobileContainer() {
    burgerMenu.innerText = "☰";
    featuresMobileContainer.style.right = "-200px";
    mobileContainerOpen = false;
    document.body.style.overflowY = "auto";
    allClickableBtn.forEach((homeBtn) => {
      homeBtn.style.pointerEvents = "auto";
    });
  }
}
