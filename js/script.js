import { initLanding } from "./home.js";

const elements = {
  burgerMenu: document.getElementById("burgerMenu"),
  homeSection: document.getElementById("homeSection"),
  getStartBtn: document.getElementById("getStartBtn"),
  demoBtn: document.getElementById("demoBtn"),
  featuresContainer: document.getElementById("featuresContainer"),
  featuresMobileContainer: document.getElementById("featuresMobileContainer"),
};

initLanding(elements);
