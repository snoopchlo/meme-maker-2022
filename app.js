"use strict";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//tell js the size of the canvas
canvas.height = 500;
canvas.width = 500;

ctx.rect(100,100, 50, 50);
ctx.rect(150,150, 50, 50);
ctx.fill();

ctx.beginPath();
ctx.rect(200,200, 50, 50);
ctx.rect(250,250, 50, 50);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.rect(300,300, 50, 50);
ctx.fillStyle = "yellow";
ctx.fill();
