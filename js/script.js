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
  mobileFeaturesLink: document.getElementById("mobileFeaturesLink"),
  themeToggle: document.getElementById("themeToggle"),
  mobileThemeToggle: document.getElementById("mobileThemeToggle"),
  toggleSvg: document.getElementById("toggleSvg"),
  mobileAuthLoginBtn: document.getElementById("mobileAuthLoginBtn"),
  mobileAuthSigninBtn: document.getElementById("mobileAuthSigninBtn"),
  authContainer: document.getElementById("authContainer"),
  loginWrapper: document.getElementById("loginWrapper"),
  signupWrapper: document.getElementById("signupWrapper"),
  toLogin: document.getElementById("toLogin"),
  toSignup: document.getElementById("toSignup"),
  authLoginBtn: document.getElementById("authLoginBtn"),
  authSignupBtn: document.getElementById("authSignupBtn"),
  togglePass: document.querySelectorAll(".toggle-password"),
};

document.addEventListener("DOMContentLoaded", () => {
  if (elements.burgerMenu) {
    initLanding(elements);
  }
});
