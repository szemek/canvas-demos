Array.prototype.shuffle = function() {
  var buffer = [];
  while (this.length) {
    buffer.push(this.splice(Math.random() * this.length, 1)[0]);
  }
  while (buffer.length) {
    this.push(buffer.pop());
  }
  return this;
}

function indices(width, height, skip) {
  var array = [];
  for (var i = 0; i < width; i += skip) {
    for (var j = 0; j < height; j += skip) {
      array.push([i, j]);
    }
  }
  return array.shuffle();
}

function draw(ctx, image, pixels, index, bound, skip) {
  if(index < bound) {
    // draw line by line from top to bottom
    ctx.drawImage(image, pixels[index][0], pixels[index][1], skip, skip,
                         pixels[index][0], pixels[index][1], skip, skip);
    setTimeout(function() {
      draw(ctx, image, pixels, index+1, bound, skip);
    }, 0);
  }
}

window.addEventListener('load', function() {
  var img = new Image();
  img.onload = function() {
    var canvas = document.querySelector('#drawing');
    var ctx = canvas.getContext('2d');
    var skip = 10;
    var pixels = indices(this.width, this.height, skip);
    draw(ctx, this, pixels, 0, pixels.length, skip);
  };
  img.src = 'img/butterfly.jpg';
});
