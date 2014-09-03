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
  this.value = (endpoint.x - startpoint.x) / (endpoint.y - startpoint.y);
  return value < 0 ? {"message": "Slope is Negative", "value": value} : {"message": "Slope is Positive", "value": value} ;
}

console.log(slope(a,b));
