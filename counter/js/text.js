(function() {
  var canvas;
  var ctx;
  var width;
  var height;

  var counter = 0;
  var maximum = 60;

  function draw() {
    ctx.clearRect(0, 0, width, height);
    var x = width / 2 - 50;
    var y = height / 2 + 60;
    if(counter >= 10) {
      x -= 60;
    }
    ctx.font = '200px Arial';
    ctx.fillStyle = 'rgb(10,128,128)';
    ctx.fillText(counter, x, y);
  }

  function init() {
    canvas = document.querySelector('canvas#text');
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
