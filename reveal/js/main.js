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

function indices(max) {
  var array = [];
  for (var i = 0; i < max; i += 1) {
    array.push(i);
  }
  return array.shuffle();
}

function draw(ctx, image, lines, index) {
  if(index < image.height) {
    // draw line by line from top to bottom
    ctx.drawImage(image, 0, lines[index], image.width, 1,
                         0, lines[index], image.width, 1);
    setTimeout(function() {
      draw(ctx, image, lines, index+1);
    }, 0);
  }
}

window.addEventListener('load', function() {
  var img = new Image();
  img.onload = function() {
    var canvas = document.querySelector('#drawing');
    var ctx = canvas.getContext('2d');
    var lines = indices(this.height);
    draw(ctx, this, lines, 0);
  };
  img.src = 'img/penguin.jpg';
});
