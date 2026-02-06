export function initLanding(elements) {
  const { burgerMenu, featuresMobileContainer } = elements;

  let mobileContainerOpen = false;

  burgerMenu.addEventListener("click", (e) => {
    if (!mobileContainerOpen) {
      e.stopPropagation();
      burgerMenu.innerText = "X";
      featuresMobileContainer.style.right = "0";
      mobileContainerOpen = true;
    } else {
      e.stopPropagation();
      burgerMenu.innerText = "☰";
      featuresMobileContainer.style.right = "-200px";
      mobileContainerOpen = false;
    }
  });
}
