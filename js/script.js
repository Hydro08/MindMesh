import { initLanding } from "./home.js";

const elements = {
  // ========== INDEX ========== //
  burgerMenu: document.getElementById("burgerMenu"),
  homeSection: document.getElementById("homeSection"),
  getStartBtn: document.getElementById("getStartBtn"),
  demoBtn: document.getElementById("demoBtn"),
  featuresContainer: document.getElementById("featuresContainer"),
  featuresMobileContainer: document.getElementById("featuresMobileContainer"),
  mobileHomeLink: document.getElementById("mobileHomeLink"),
  themeToggle: document.getElementById("themeToggle"),
  mobileThemeToggle: document.getElementById("mobileThemeToggle"),
  toggleSvg: document.getElementById("toggleSvg"),
};

document.addEventListener("DOMContentLoaded", () => {
  if (elements.burgerMenu) {
    initLanding(elements);
  }
});
