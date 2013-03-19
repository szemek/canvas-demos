(function() {
  // Global variables
  var canvas;
  var ctx;
  var width;
  var height;

  var counter = 0;
  var maximum = 60;

  function draw() {
    var x = width / 2;
    var y = height / 2;
    var radius = 0.375 * height;

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "rgb(10,128,128)";

    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x, y, radius - 10, 1.5 * Math.PI, 3.5 * Math.PI);
    ctx.arc(x, y, radius + 10, 1.5 * Math.PI, 3.5 * Math.PI);
    ctx.stroke();

    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(x, y, radius, 1.5 * Math.PI, 1.5 * Math.PI + (counter * 2.0 * Math.PI) / maximum);
    ctx.stroke();

  }

  function init() {
    canvas = document.querySelector('canvas#ring');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    draw();
  }

  function keydown(event) {
    if(event.keyIdentifier == "Right") {
      if(counter < maximum) {
        counter += 1;
      }
    }
    else if(event.keyIdentifier == "Left") {
      if(counter > 0) {
        counter -= 1;
      }
    }

    draw();
  }

  window.addEventListener('load', init);
  window.addEventListener('keydown', keydown);
})();
