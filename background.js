const colors = [
  "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
  "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
  "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
  "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
  "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
  "linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)",
  "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
];

const chosenColor = colors[Math.floor(Math.random() * colors.length)];
// Shortcut icons

// const icon1 = document.querySelector(".icon1");
// const icon2 = document.querySelector(".icon2");
// const icon3 = document.querySelector(".icon3");
// const icon4 = document.querySelector(".icon4");

// icon1.style.background = colors[Math.floor(Math.random() * colors.length)];
// icon2.style.background = colors[Math.floor(Math.random() * colors.length)];
// icon3.style.background = colors[Math.floor(Math.random() * colors.length)];
// icon4.style.background = colors[Math.floor(Math.random() * colors.length)];

document
  .querySelectorAll(".circle")
  .forEach((e) => (e.style.background = chosenColor));

const brushBtn = document.querySelector(".main-footer__color-btn");

function handleColor() {
  console.log("clicked");
  const chosenColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = chosenColor;
}
handleColor();
brushBtn.addEventListener("click", handleColor);
