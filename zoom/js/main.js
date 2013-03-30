function draw(scale, translation){
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext("2d");

  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(translation.x, translation.y);
  ctx.scale(scale, scale);
  ctx.beginPath();
  ctx.arc(0, 0, 30, 0, 2.0 * Math.PI);

  ctx.lineWidth = 5;
  ctx.strokeStyle = "#0000ff";
  ctx.stroke();
  ctx.restore();
}

window.onload = function(){
  var canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var translation = {
    x: canvas.width / 2,
    y: canvas.height / 2
  };

  var scale = 1.0;
  var scaleMultiplier = 0.8;
  var dragOffset = {};
  var mouseDown = false;

  // add button event listeners
  document.querySelector("#plus").addEventListener("click", function(){
    scale /= scaleMultiplier;
    draw(scale, translation);
  }, false);

  document.querySelector("#minus").addEventListener("click", function(){
    scale *= scaleMultiplier;
    draw(scale, translation);
  }, false);

  // add event listeners to handle screen drag
  canvas.addEventListener("mousedown", function(event){
    mouseDown = true;
    dragOffset.x = event.clientX - translation.x;
    dragOffset.y = event.clientY - translation.y;
  });

  var mouseDownOff = function(event) { mouseDown = false; };

  canvas.addEventListener("mouseup", mouseDownOff);
  canvas.addEventListener("mouseover", mouseDownOff);
  canvas.addEventListener("mouseout", mouseDownOff);

  canvas.addEventListener("mousemove", function(event){
    if (mouseDown) {
      translation.x = event.clientX - dragOffset.x;
      translation.y = event.clientY - dragOffset.y;
      draw(scale, translation);
    }
  });

  draw(scale, translation);
};
