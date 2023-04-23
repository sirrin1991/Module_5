class Shape {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
}

interface IArea {
    area():number;
}

class Rectangle extends Shape implements IArea{

    constructor(x: number, y: number) {
        super(x, y);
    }

    area(): number  {
        return this.x*this.y;
    }

}
const rectangle = new Rectangle( 10, 20);
console.log(rectangle.area());
