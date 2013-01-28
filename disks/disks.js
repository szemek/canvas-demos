function rand(n) {
  return Math.floor(Math.random() * n);
}

function draw() {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  for (var i = 0; i < 50; i++) {
    ctx.beginPath();
    var x = rand(canvas.width);
    var y = rand(canvas.height);
    var radius = rand(80) + 30;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);

    var r = rand(256);
    var g = rand(256);
    var b = rand(256);
    var a = Math.random()
    while(a < 0.1 || a > 0.2)
      a = Math.random();
    ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    ctx.fill();
    ctx.closePath();
  };
}

document.addEventListener('DOMContentLoaded', draw);
