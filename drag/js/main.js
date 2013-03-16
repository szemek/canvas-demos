// Global variables
var canvas;
var ctx;

var circles = [];
var dragging;

function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dragging = false;
  this.render = function(options) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = (this.dragging) ? '#00eeee' : '#0000ff';
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }
}

window.addEventListener('load', function() {
  canvas = document.querySelector('#area');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  var mouseHandler = function(event) {
    var coordinates = document.querySelector('#coordinates');
    coordinates.innerHTML = 'X: ' + event.clientX + ', Y: ' + event.clientY;
  };

  canvas.addEventListener('mouseover', mouseHandler)
  canvas.addEventListener('mousemove', mouseHandler);

  canvas.addEventListener('mousedown', function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    for(var i=0; i<circles.length; i++) {
      var x = circles[i].x;
      var y = circles[i].y;
      var radius = circles[i].radius;
      if(Math.pow(x-mouseX, 2) + Math.pow(y-mouseY, 2) < Math.pow(radius, 2)) {
        dragging = i;
        break;
      }
    }
  });

  canvas.addEventListener('mousemove', function(event) {
    if(dragging !== undefined) {
      var mouseX = event.clientX;
      var mouseY = event.clientY;

      var circle = circles[dragging];
      circle.x = mouseX;
      circle.y = mouseY;
      circle.dragging = true;
      circle.render();
      circle[dragging] = circle;
    }
  });

  canvas.addEventListener('mouseup', function(event) {
    circles[dragging].dragging = false;
    circles[dragging].render();
    dragging = undefined;
  });

  circles.push(new Circle(100, 100, 20));
  for(var i=0; i<circles.length; i++) {
    circles[i].render();
  }
});
