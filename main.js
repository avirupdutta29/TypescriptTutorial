var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //..
    };
    Point.prototype.getX = function () {
        return this.y;
    };
    return Point;
}());
var point = new Point(1, 2);
var x = point.getX();
console.log(x);
point.draw();
