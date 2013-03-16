window.addEventListener('load', function() {
  var canvas = document.querySelector('#area');
  canvas.width = document.width;
  canvas.height = document.height;
  var ctx = canvas.getContext('2d');
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  var mouseHandler = function(event) {
    var coordinates = document.querySelector('#coordinates');
    coordinates.innerHTML = 'X: ' + event.clientX + ', Y: ' + event.clientY;
  };
  canvas.addEventListener('mouseover', mouseHandler)
  canvas.addEventListener('mousemove', mouseHandler);

  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
