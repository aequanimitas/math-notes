function Point() {
  this.x = 0;
  this.y = 0; 
}

function StartPoint() {
  Point.call(this)
}

var a = new Point();
a.x = 1, a.y = 2;

var b = new Point();
b.x = 10, b.y = 16;

function slope(startpoint, endpoint) {
  return  ((endpoint.x - startpoint.x) / (endpoint.y - startpoint.y) < 0) ? "Slope is negative" : "Slope is positive";
}

console.log(slope(a,b));
