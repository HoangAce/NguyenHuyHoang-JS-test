class Shape {
    //Ham khoi tao
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    //Phuong thuc
    calcPerimeter() {
        document.write('the perimeter of ' + this.name + ' is ' + this.sides * this.sideLength);
        document.write("<BR>");
    }
}