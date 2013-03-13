// Global variables
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
  self.ctx = options.ctx;
  self.render = function() {
    self.ctx.beginPath();
    self.ctx.arc(self.x, self.y, self.radius, 0, 2 * Math.PI);
    self.ctx.fillStyle = self.color;
    self.ctx.fill();
    self.ctx.closePath();
  }

  circles.push(self);
}

circles.render = function() {
  for(var i=0; i<circles.length; i++) {
    circles[i].render();
  }
};

function draw_circles(ctx) {
  for (var i = 0; i < 250; i++) {
    var x = rand(ctx.canvas.width);
    var y = rand(ctx.canvas.height);
    var radius = rand(80) + 30;
    var r = rand(256), g = rand(256), b = rand(256);
    var a = 0.1 + 0.1 * Math.random();
    var color = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    var circle = new Circle({x: x, y: y, radius: radius, color: color, ctx: ctx});
  };
  circles.render();
}

function draw_text(ctx, start, max) {
  if(start <= max) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.font = 'italic 400px Lato';
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillText(start, 100, 500);
    ctx.strokeStyle = '#1CBCAF';
    ctx.strokeText(start, 100, 500);
    ctx.lineWidth = 5;
    setTimeout(function() {
      draw_text(ctx, start+1, max);
    }, 0);
  }
}

function init() {
  var canvas_circles = document.querySelector('#circles');
  canvas_circles.width = window.innerWidth;
  canvas_circles.height = window.innerHeight;
  var ctx_circles = canvas_circles.getContext('2d');

  var canvas_text = document.querySelector('#text');
  canvas_text.width = window.innerWidth;
  canvas_text.height = window.innerHeight;
  var ctx_text = canvas_text.getContext('2d');

  setTimeout(function() {
    draw_circles(ctx_circles);
  }, 0);
  setTimeout(function() {
    draw_text(ctx_text, 0, 1000);
  }, 0);
}

window.addEventListener('load', init);
