var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.perimeter = function (l, b) {
        this.breath = b;
        this.length = l;
        return (2 * (this.length + this.breath));
    };
    Rectangle.prototype.area = function (l, b) {
        this.length = l;
        this.breath = b;
        return (this.length * this.breath);
    };
    return Rectangle;
}());
