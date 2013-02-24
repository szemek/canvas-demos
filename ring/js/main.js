var ring = {
  x: 250,
  y: 250,
  radius: 100,
  start_angle: - 0.5 * Math.PI
};

function timer(ctx, sec) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.beginPath();
  ctx.arc(ring.x, ring.y, ring.radius, ring.start_angle, ring.start_angle + sec * (Math.PI/30.0));
  ctx.lineWidth = 10;
  ctx.stroke();
}

function draw(ctx) {
  setInterval(function() {
    var now = new Date();
    timer(ctx, now.getSeconds() + now.getMilliseconds() / 1000.0);
  }, 20);
}

window.addEventListener('load', function() {
  var canvas = document.querySelector('#drawing');
  var ctx = canvas.getContext('2d');
  draw(ctx);
});
