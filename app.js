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

const color = document.getElementById("color");
const modeBtn = document.getElementById("mode-btn");
const resetBtn = document.getElementById("reset-btn");
const eraserBtn = document.getElementById("eraser-btn");

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

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

const fontList = {
  sansSerif: "sans-serif",
  BhuTuka: "BhuTuka Expanded One",
  Inter: "Inter",
  Montserrat: "Montserrat",
  MouseMemoirs: "Mouse Memoirs",
  OleoScriptSwashCaps: "Oleo Script Swash Caps",
  Orbitron: "Orbitron",
  Pacifico: "Pacifico",
  PermanentMarker: "Permanent Marker",
  Play: "Play",
  Roboto: "Roboto",
};

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
let chosenFont = "";
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

function onColorChange(e) {
  ctx.fillStyle = e.target.value;
  ctx.strokeStyle = e.target.value;
}

function onColorClick(e) {
  const colorValue = e.target.dataset.color;
  ctx.fillStyle = colorValue;
  ctx.strokeStyle = colorValue;
  color.value = colorValue;
}
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onResetClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

// TEXT
function onDoubleClick(e) {
  console.log("double clicked");
  const text = textInput.value;
  if (text !== "" && fillText) {
    ctx.save();
    ctx.lineWidth = 1;

    ctx.fillText(text, e.offsetX, e.offsetY);
    ctx.restore();
    if (chosenFont == "bhutukaFont") {
      ctx.font = `48px ${fontList.BhuTuka}`;
    } else if (chosenFont == "montserratFont") {
      ctx.font = `48px ${fontList.Montserrat}`;
    } else if ((chosenFont = "mouseFont")) {
      ctx.font = `48px ${fontList.mouseFont}`;
    } else if ((chosenFont = "oleoFont")) {
      ctx.font = `48px ${fontList.oleoFont}`;
    } else if (chosenFont == "orbitronFont") {
      ctx.font = `48px ${fontList.Orbitron}`;
      console.log("font is", ctx.font);
    } else if ((chosenFont = "pacificoFont")) {
      ctx.font = `48px ${fontList.pacificoFont}`;
    } else if ((chosenFont = "permanentFont")) {
      ctx.font = `48px ${fontList.permanentFont}`;
    } else if ((chosenFont = "playFont")) {
      ctx.font = `48px ${fontList.playFont}`;
    } else if ((chosenFont = "robotoFont")) {
      ctx.font = `48px ${fontList.robotoFont}`;
    } else if ((chosenFont = "sansSerifFont")) {
      ctx.font = `48px ${fontList.sansSerifFont}`;
    } else {
      ctx.font = "48px serif";
    }
  } else if (text !== "" && strokeText) {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = "48px serif";
    ctx.strokeText(text, e.offsetX, e.offsetY);
    ctx.restore();
  } else {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = "48px serif";
    ctx.fillText(text, e.offsetX, e.offsetY);
    ctx.restore();
  }
}

function fillTextStyle() {
  fillText = true;
}

function strokeTextStyle() {
  strokeText = true;
  fillText = false;
}
console.dir(fillTextBtn);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
resetBtn.addEventListener("click", onResetClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
// TEXT

canvas.addEventListener("dblclick", onDoubleClick);
fillTextBtn.addEventListener("click", fillTextStyle);
strokeTextBtn.addEventListener("click", strokeTextStyle);

function getBhutukaFont() {
  console.log("bhutukafont clicked");
  chosenFont = "bhutukaFont";
  fontBtn.innerText = `Font: ${fontList.BhuTuka}`;
}
function getMontserratFont() {
  console.log("getMontserratFont clicked");
  fontBtn.innerText = `Font: ${fontList.Montserrat}`;

  chosenFont = "montserratFont";
}
function getMouseFont() {
  console.log("getMouseFont clicked");
  chosenFont = "mouseFont";
  fontBtn.innerText = `Font: ${fontList.MouseMemoirs}`;
}
function getOleoFont() {
  console.log("getOleoFont clicked");
  chosenFont = "oleoFont";
  fontBtn.innerText = `Font: ${fontList.OleoScriptSwashCaps}`;
}
function getOrbitronFont() {
  console.log("getOrbitronFont clicked");
  fontBtn.innerText = `Font: ${fontList.Orbitron}`;
}
function getPacificoFont() {
  console.log("getPacificoFont clicked");
  chosenFont = "pacificoFont";
  fontBtn.innerText = `Font: ${fontList.Pacifico}`;
}
function getPermanentFont() {
  console.log("getPermanentFont clicked");
  fontBtn.innerText = `Font: ${fontList.PermanentMarker}`;
  chosenFont = "permanentFont";
}
function getPlayFont() {
  console.log("getPlayFont clicked");
  fontBtn.innerText = `Font: ${fontList.Play}`;
  chosenFont = "playFont";
}
function getRobotoFont() {
  console.log("getRobotoFont clicked");
  fontBtn.innerText = `Font: ${fontList.Roboto}`;
  chosenFont = "robotoFont";
}
function getSansSerifFont() {
  console.log("getSansSerifFont clicked");
  fontBtn.innerText = `Font: ${fontList.sansSerif}`;
  chosenFont = "sansSerifFont";
}

// Fonts

bhutukaFont.addEventListener("click", getBhutukaFont);
montserratFont.addEventListener("click", getMontserratFont);
mouseFont.addEventListener("click", getMouseFont);
oleoFont.addEventListener("click", getOleoFont);
orbitronFont.addEventListener("click", getOrbitronFont);
pacificoFont.addEventListener("click", getPacificoFont);
permanentFont.addEventListener("click", getPermanentFont);
playFont.addEventListener("click", getPlayFont);
robotoFont.addEventListener("click", getRobotoFont);
sansSerifFont.addEventListener("click", getSansSerifFont);
