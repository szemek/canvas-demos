// Global variables
var canvas;
var ctx;

var ball = {
  x: 100,
  y: 200,
  radius: 20,
  dx: 2,
  dy: 2
};

function init() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  setInterval(draw, 16);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.fillStyle = '#0000ff';
  ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  if(ball.x < ball.radius || ball.x > canvas.width - ball.radius) ball.dx = -ball.dx;
  if(ball.y < ball.radius || ball.y > canvas.height - ball.radius) ball.dy = -ball.dy;
  ball.x += ball.dx;
  ball.y += ball.dy;
}

document.addEventListener('DOMContentLoaded', init);
