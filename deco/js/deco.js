// Global variables
var canvas;
var ctx;
var circles = [];

function rand(n) {
  return Math.floor(Math.random() * n);
}

function Circle(options) {
  var self = this;

  self.x = options.x;
  self.y = options.y;
  self.color = options.color;
  self.radius = options.radius;
  self.render = function() {
    ctx.beginPath();
    ctx.arc(self.x, self.y, self.radius, 0, 2 * Math.PI);
    ctx.fillStyle = self.color;
    ctx.fill();
    ctx.closePath();
  }

  circles.push(self);
}

circles.render = function() {
  for(var i=0; i<circles.length; i++) {
    circles[i].render();
  }
};

function init() {
  canvas = document.querySelector('#area');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');

  for (var i = 0; i < 250; i++) {
    var x = rand(canvas.width);
    var y = rand(canvas.height);
    var radius = rand(80) + 30;
    var r = rand(256), g = rand(256), b = rand(256);
    var a = 0.1 + 0.1 * Math.random();
    var color = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    var circle = new Circle({x: x, y: y, radius: radius, color: color});
    circle.render();
  };

  draw(0, 1000);
}

function draw(start, max) {
  if(start <= max) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.render();

    ctx.font = 'italic 400px Lato';
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillText(start, 100, 500);
    ctx.strokeStyle = '#1CBCAF';
    ctx.strokeText(start, 100, 500);
    ctx.lineWidth = 5;
    setTimeout(function() {
      draw(start+1, max);
    }, 0);
  }
}

window.addEventListener('load', init);
