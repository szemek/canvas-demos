function rand(n) {
  return Math.floor(Math.random() * n);
}

function draw(ctx) {
  for (var i = 0; i < 50; i++) {
    ctx.beginPath();
    var x = rand(ctx.canvas.width);
    var y = rand(ctx.canvas.height);
    var radius = rand(80) + 30;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);

    var r = rand(256), g = rand(256), b = rand(256);
    var a = 0.1 + 0.1 * Math.random();
    ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    ctx.fill();
    ctx.closePath();
  };
}

function init() {
  var canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext('2d');

  draw(ctx);
}

window.addEventListener('load', init);
