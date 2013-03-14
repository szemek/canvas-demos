// Global variables
var canvas;
var ctx;

var ball = {
  x: 100,
  y: 200,
  radius: 20,
  dx: 1,
  dy: 1
};

window.nextFrame = (function(callback){
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

function init() {
  canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');

  draw();
}

function draw() {
  ctx.clearRect(ball.x - 2*ball.radius, ball.y - 2*ball.radius, 4*ball.radius, 4*ball.radius);
  ctx.beginPath();
  ctx.fillStyle = '#0000ff';
  ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  if(ball.x < ball.radius || ball.x > canvas.width - ball.radius) ball.dx = -ball.dx;
  if(ball.y < ball.radius || ball.y > canvas.height - ball.radius) ball.dy = -ball.dy;
  ball.x += ball.dx;
  ball.y += ball.dy;
  nextFrame(draw);
}

window.addEventListener('load', init);
