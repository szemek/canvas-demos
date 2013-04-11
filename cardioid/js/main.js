var full_angle = 2 * Math.PI;

function draw(ctx, step) {
  if(step < full_angle){
    var x = 16 * Math.pow(Math.sin(step), 3);
    var y = 13 * Math.cos(step) - 5 * Math.cos(2*step) - 2 * Math.cos(3*step) - Math.cos(4*step);
    x *= 8;
    y *= 8;
    ctx.fillRect(ctx.canvas.width/2 - x, ctx.canvas.height/2 - y, 1, 1)

    setTimeout(function() {
      draw(ctx, step+0.005);
    }, 0);
  }
}

window.addEventListener('load', function() {
  var canvas = document.querySelector('canvas');
  canvas.width = 400;
  canvas.height = 400;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  draw(ctx, 0.0);
});

