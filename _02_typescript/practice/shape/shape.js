class Shape {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
}
class Rectangle extends Shape {
    constructor(x, y) {
        super(x, y);
    }
    area() {
        return this.x * this.y;
    }
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle.toString());
console.log(rectangle.area());
