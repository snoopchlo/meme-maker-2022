"use strict";

// TEXT
const textInput = document.getElementById("text");
const fillTextBtn = document.getElementById("fill-mode");
const strokeTextBtn = document.getElementById("stroke-mode");

const saveBtn = document.getElementById("save-btn");
const fileInput = document.getElementById("image");

const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const fontSize = document.getElementById("font-size");
const color = document.getElementById("color");
const colorPalette = document.getElementById("color-palette");
const modeBtnPen = document.getElementById("mode-btn__pen");
const modeBtnFill = document.getElementById("mode-btn__fill");
const resetBtn = document.getElementById("reset-btn");
const eraserBtn = document.getElementById("eraser-btn");

const CANVAS_WIDTH = 650;
const CANVAS_HEIGHT = 650;

const fontBtn = document.getElementById("font-dropdown-btn");
const bhutukaFont = document.getElementById("bhutuka");
const montserratFont = document.getElementById("montserrat");
const mouseFont = document.getElementById("mouse");
const oleoFont = document.getElementById("oleo");
const orbitronFont = document.getElementById("orbitron");
const pacificoFont = document.getElementById("pacifico");
const permanentFont = document.getElementById("permanent");
const playFont = document.getElementById("play");
const robotoFont = document.getElementById("roboto");
const sansSerifFont = document.getElementById("sans-serif");

// const fontList = {
//   sansSerif: "sans-serif",
//   BhuTuka: "BhuTuka Expanded One",
//   Inter: "Inter",
//   Montserrat: "Montserrat",
//   MouseMemoirs: "Mouse Memoirs",
//   OleoScriptSwashCaps: "Oleo Script Swash Caps",
//   Orbitron: "Orbitron",
//   Pacifico: "Pacifico",
//   PermanentMarker: "Permanent Marker",
//   Play: "Play",
//   Roboto: "Roboto",
// };
//tell js the size of the canvas
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;
ctx.lineCap = "round";
ctx.lineWidth = lineWidth.value;
// Pen style for drawing
let isPainting = false;
let isFilling = false;
// Pen style for text
let fillText = false;
let strokeText = false;

let changeFontSize = false;

let onBhutuka = false;
let onMontserrat = false;
function getCurrentFontSize() {
  let curentFont = ctx.font;
  let cf = curentFont.split(" ");
  let currentFontSize = cf[0];
  return currentFontSize;
}
function getCurrentFont() {
  let curentFont = ctx.font;
  let cf = curentFont.split(" ");
  let currentFont = cf[1];
  return currentFont;
}
// function getBhutukaFont() {
//   onBhutuka = true;
//   onMontserrat = false;
//   console.log("onBhutuka is", onBhutuka);
// }

// function getMontserratFont() {
//   changeFontSize = true;
//   let fontSize = getCurrentFontSize();
//   console.log("now font size is", fontSize);
//   onBhutuka = false;
//   onMontserrat = true;
//   console.log("onBhutuka is", onBhutuka);
//   console.log("onMontserrat is", onMontserrat);

//   let chosenFont = fontList["Montserrat"];

//   fontBtn.innerText = chosenFont;

//   ctx.font = `${fontSize}px ${chosenFont}`;
//   return chosenFont;
// }

// function getMouseFont() {
//   let chosenFont = fontList["MouseMemoirs"];
//   fontBtn.innerText = `Font: ${chosenFont}`;

//   return chosenFont;
// }

// function getOleoFont() {
//   let chosenFont = fontList["OleoScriptSwashCaps"];
//   fontBtn.innerText = `Font: ${chosenFont}`;
//   return chosenFont;
// }
// function getOrbitronFont() {
//   let chosenFont = fontList["Orbitron"];
//   fontBtn.innerText = `Font: ${chosenFont}`;
//   return chosenFont;
// }
// function getPacificoFont() {
//   let chosenFont = fontList["Pacifico"];
//   fontBtn.innerText = `Font: ${chosenFont}`;
//   return chosenFont;
// }
// function getPermanentFont() {
//   let chosenFont = fontList["PermanentMarker"];
//   fontBtn.innerText = `Font: ${chosenFont}`;
//   return chosenFont;
// }
// function getPlayFont() {
//   let chosenFont = fontList["Play"];
//   fontBtn.innerText = `Font: ${chosenFont}`;
//   return chosenFont;
// }
// function getRobotoFont() {
//   let chosenFont = fontList["Roboto"];
//   fontBtn.innerText = `Font: ${chosenFont}`;
//   return chosenFont;
// }
// function getSansSerifFont() {
//   let chosenFont = fontList["sansSerif"];
//   fontBtn.innerText = `Font: ${chosenFont}`;
//   return chosenFont;
// }

function onFileChange(e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function onMouseDown() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}
function onLineWidthChange(e) {
  ctx.lineWidth = e.target.value;
}
// function onFontChange() {
//   let currentFontSize = getCurrentFontSize();
//   if (onBhutuka) {
//     ctx.save();
//     console.log("Hello");
//     let cf = getBhutukaFont();
//     console.log("cf is ", cf);
//     ctx.font = `${currentFontSize}px ${cf}`;
//     ctx.stroke();
//   } else if (onMontserrat) {
//     ctx.save();
//     console.log("bye");
//     let cf = getMontserratFont();
//     ctx.font = `${currentFontSize}px ${cf}`;
//     ctx.stroke();
//   }
// else {
//   let font = getCurrentFont();

//   let defaultFont = fontList["sansSerif"];
//   fontBtn.innerText = `Font: ${defaultFont}`;
//   ctx.font = `${currentFontSize}px sans-serif`;
// }
console.log(ctx.font);
//}
// HANDLE FONT SIZE
// function onFontSizeChange(e) {
//   e.preventDefault();
//   if (onBhutuka) {
//     console.log("Hello");
//     let cf = getBhutukaFont();
//     console.log("cf is", cf);

//     ctx.font = `${e.target.value}px ${cf}`;
//   } else if (onMontserrat) {
//     ctx.save();
//     console.log("bye");
//     let cf = getMontserratFont();
//     ctx.font = `${e.target.value}px ${cf}`;
//   } else {
//     let currentFont = getCurrentFont();

//     ctx.font = `${e.target.value}px ${currentFont}`;
//     console.log("--->", ctx.font);
//   }
// }
function onFontSizeChange(e) {
  ctx.font = `${e.target.value}px serif`;
}
function onColorChange(e) {
  ctx.fillStyle = e.target.value;
  ctx.strokeStyle = e.target.value;
  colorPalette.style.color = e.target.value;
}

function onColorClick(e) {
  const colorValue = e.target.dataset.color;
  ctx.fillStyle = colorValue;
  ctx.strokeStyle = colorValue;
  color.value = colorValue;
  colorPalette.style.color = colorValue;
}
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onPenMode() {
  isFilling = false;
  modeBtnPen.style.border = "1px solid rgba(255, 255, 255, 1)";
  modeBtnPen.style.background = "rgba(242, 239, 239, 0.61)";

  //reset others
  modeBtnFill.style.border = "none";
  modeBtnFill.style.background = "rgba(255, 255, 255, 0.64)";

  eraserBtn.style.border = "none";
  eraserBtn.style.background = "rgba(255, 255, 255, 0.64)";
}
function onFillMode() {
  isFilling = true;
  modeBtnFill.style.border = "1px solid rgba(255, 255, 255, 1)";
  modeBtnFill.style.background = "rgba(242, 239, 239, 0.61)";

  //reset others
  modeBtnPen.style.border = "none";
  modeBtnPen.style.background = "rgba(255, 255, 255, 0.64)";

  eraserBtn.style.border = "none";
  eraserBtn.style.background = "rgba(255, 255, 255, 0.64)";
}

function onResetClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  noBtnEffect();
  colorPalette.style.color = "black";
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;

  eraserBtn.style.border = "1px solid rgba(255, 255, 255, 1)";
  eraserBtn.style.background = "rgba(242, 239, 239, 0.61)";

  //reset others
  modeBtnPen.style.border = "none";
  modeBtnPen.style.background = "rgba(255, 255, 255, 0.64)";

  modeBtnFill.style.border = "none";
  modeBtnFill.style.background = "rgba(255, 255, 255, 0.64)";
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

function onDoubleClick(e) {
  const text = textInput.value;
  if (text !== "" && fillText) {
    ctx.save();
    ctx.lineWidth = 1;
    // ctx.font = "48px serif";
    ctx.fillText(text, e.offsetX, e.offsetY);
    ctx.restore();
  } else if (text !== "" && strokeText) {
    ctx.save();
    ctx.lineWidth = 1;
    // ctx.font = "48px serif";
    ctx.strokeText(text, e.offsetX, e.offsetY);
    ctx.restore();
  } else {
    ctx.save();
    ctx.lineWidth = 1;
    // ctx.font = "48px serif";
    ctx.fillText(text, e.offsetX, e.offsetY);
    ctx.restore();
  }
  console.log("font size is", ctx.font);
}
// function onFontChange() {
//   console.log("double clicked");
//   const text = textInput.value;

//   let currentFontSize = getCurrentFontSize();
//   if (onBhutuka) {
//     ctx.save();
//     console.log("Hello");
//     let cf = getBhutukaFont();
//     console.log("cf is ", cf);
//     ctx.font = `${currentFontSize}px ${cf}`;
//     ctx.stroke();
//   } else if (onMontserrat) {
//     ctx.save();
//     console.log("bye");
//     let cf = getMontserratFont();
//     ctx.font = `${currentFontSize}px ${cf}`;
//     ctx.stroke();
//   } else {
//     let font = getCurrentFont();

//     let defaultFont = fontList["sansSerif"];
//     fontBtn.innerText = `Font: ${defaultFont}`;
//     ctx.font = `${currentFontSize}px sans-serif`;
//   }
//   console.log(ctx.font);
// }

function fillTextStyle() {
  fillText = true;
  fillTextBtn.style.border = "1px solid rgba(255, 255, 255, 1)";
  fillTextBtn.style.background = "rgba(242, 239, 239, 0.61)";
  strokeTextBtn.style.border = "none";
  strokeTextBtn.style.background = "rgba(255, 255, 255, 0.64)";
}

function strokeTextStyle() {
  strokeText = true;
  fillText = false;
  strokeTextBtn.style.border = "1px solid rgba(255, 255, 255, 1)";
  strokeTextBtn.style.background = "rgba(242, 239, 239, 0.61)";
  fillTextBtn.style.border = "none";
  fillTextBtn.style.background = "rgba(255, 255, 255, 0.64)";
}

function noBtnEffect() {
  strokeTextBtn.style.border = "none";
  strokeTextBtn.style.background = "rgba(255, 255, 255, 0.64)";
  fillTextBtn.style.border = "none";
  fillTextBtn.style.background = "rgba(255, 255, 255, 0.64)";

  modeBtnFill.style.border = "none";
  modeBtnFill.style.background = "rgba(255, 255, 255, 0.64)";

  modeBtnPen.style.border = "none";
  modeBtnPen.style.background = "rgba(255, 255, 255, 0.64)";

  modeBtnFill.style.border = "none";
  modeBtnFill.style.background = "rgba(255, 255, 255, 0.64)";
}
console.dir(fillTextBtn);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("click", noBtnEffect);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtnPen.addEventListener("click", onPenMode);
modeBtnFill.addEventListener("click", onFillMode);
resetBtn.addEventListener("click", onResetClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
// TEXT

canvas.addEventListener("dblclick", onDoubleClick);
fillTextBtn.addEventListener("click", fillTextStyle);
strokeTextBtn.addEventListener("click", strokeTextStyle);
fontSize.addEventListener("change", onFontSizeChange);

// function chooseFont(e) {
//   let fontKey = e.target.dataset.font;
//   let fontValue = fontList[fontKey];
//   console.log("fontkey:", fontKey);
//   console.log("fontvalue:", fontValue);
//   fontBtn.innerText = `Font: ${fontValue}`;
//   return fontKey;
// }

// Fonts

// bhutukaFont.addEventListener("click", getBhutukaFont);

// montserratFont.addEventListener("click", getMontserratFont);
// mouseFont.addEventListener("click", getMouseFont);
// oleoFont.addEventListener("click", getOleoFont);
// orbitronFont.addEventListener("click", getOrbitronFont);
// pacificoFont.addEventListener("click", getPacificoFont);
// permanentFont.addEventListener("click", getPermanentFont);
// playFont.addEventListener("click", getPlayFont);
// robotoFont.addEventListener("click", getRobotoFont);
// sansSerifFont.addEventListener("click", getSansSerifFont);
